import {
    MAILCHIMP_API_KEY,
    MAILCHIMP_AUDIENCE_ID,
    MAILCHIMP_SERVER_PREFIX,
} from 'astro:env/server';
import type { APIRoute } from 'astro';

export const prerender = false;

interface MailchimpResponse {
    result: 'success' | 'error';
    msg: string;
}

interface SubscribeFormProps {
    email: string;
    fname?: string;
    lname?: string;
}

export const POST: APIRoute = async ({ request }) => {
    const form = await request.formData();

    const email = form.get('email')?.toString() ?? '';
    const fname = form.get('fname')?.toString() ?? '';
    const lname = form.get('lname')?.toString() ?? '';

    const data = {
        email,
        fname,
        lname,
    };

    try {
        const mailchimpResponse = await subscribeToMailchimp(data);

        if (mailchimpResponse.result === 'success') {
            return new Response(JSON.stringify(mailchimpResponse), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify(mailchimpResponse), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (err) {
        console.error('Mailchimp subscription error:', err);
        return new Response(
            JSON.stringify({
                result: 'error',
                msg:
                    err instanceof Error
                        ? err.message
                        : 'Unknown error occurred',
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            },
        );
    }
};

export const subscribeToMailchimp = async ({
    email,
    fname = '',
    lname = '',
}: SubscribeFormProps): Promise<MailchimpResponse> => {
    // Validate credentials
    if (
        !MAILCHIMP_API_KEY ||
        !MAILCHIMP_AUDIENCE_ID ||
        !MAILCHIMP_SERVER_PREFIX
    ) {
        return {
            result: 'error',
            msg: 'Mailchimp configuration is missing',
        };
    }

    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64')}`,
            },
            body: JSON.stringify({
                email_address: email,
                status: 'subscribed', // or 'pending' for double opt-in
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname,
                },
            }),
        });

        const data = await response.json();

        if (response.ok) {
            return {
                result: 'success',
                msg: 'Successfully subscribed to our newsletter!',
            };
        } else {
            // Handle specific Mailchimp errors
            let errorMsg = 'Subscription failed';

            if (data.title === 'Member Exists') {
                errorMsg = 'This email is already subscribed';
            } else if (data.title === 'Invalid Resource') {
                errorMsg = 'Please enter a valid email address';
            } else if (data.detail) {
                errorMsg = data.detail;
            }

            return {
                result: 'error',
                msg: errorMsg,
            };
        }
    } catch (err) {
        console.error('Mailchimp API error:', err);
        return {
            result: 'error',
            msg: 'An error occurred. Please try again later.',
        };
    }
};

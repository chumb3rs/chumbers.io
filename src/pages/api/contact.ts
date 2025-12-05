export const prerender = false;

import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import type { APIRoute } from 'astro';
import {
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    TO_EMAIL,
    FROM_EMAIL,
} from 'astro:env/server';

const client = new SESClient({
    region: 'ap-southeast-2',
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
});

export const POST: APIRoute = async ({ request }) => {
    const form = await request.formData();

    const name = form.get('name')?.toString() ?? '';
    const email = form.get('email')?.toString() ?? '';
    const subject = form.get('subject')?.toString() ?? '';
    const message = form.get('message')?.toString() ?? '';

    try {
        await sesSend(TO_EMAIL, email, message, name, subject);
        return new Response('Success', { status: 200 });
    } catch (err) {
        return new Response(`/error:${err}`, { status: 400 });
    }
};

function sesSend(
    emailTo: string,
    emailFrom: string,
    message: string,
    name: string,
    subject: string,
) {
    const params = new SendEmailCommand({
        Destination: {
            ToAddresses: [emailTo],
        },
        Message: {
            Body: {
                Text: {
                    Data: `Name: ${name}\nContact: ${emailFrom}\n\nMessage: ${message}`,
                },
            },
            Subject: {
                Data: `Correspondence from chumbers.io: ${subject}`,
            },
        },
        Source: FROM_EMAIL,
    });

    return client.send(params);
}

export const prerender = false;

import type { APIRoute } from 'astro';
import { TO_EMAIL, FROM_EMAIL } from 'astro:env/server';

export const POST: APIRoute = async ({ request }) => {
    const form = await request.formData();

    const name = form.get('name')?.toString() ?? '';
    const email = form.get('email')?.toString() ?? '';
    const subject = form.get('subject')?.toString() ?? '';
    const message = form.get('message')?.toString() ?? '';

    const isDev = import.meta.env.DEV;

    if (isDev) {
        console.log('📧 Contact form submission (dev mode):');
        console.log(`To: ${TO_EMAIL}`);
        console.log(`From: ${email} (${name})`);
        console.log(`Subject: ${subject}`);
        console.log(`Message: ${message}`);
        return new Response('Success (dev mode - check console)', {
            status: 200,
        });
    }

    try {
        await fetch('https://api.mailchannels.net/tx/v1/send', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                personalizations: [{ to: [{ email: TO_EMAIL }] }],
                from: { email: FROM_EMAIL, name: 'chumbers.io' },
                subject: `Correspondence from chumbers.io: ${subject}`,
                content: [
                    {
                        type: 'text/plain',
                        value: `Name: ${name}\nContact: ${email}\n\nMessage: ${message}`,
                    },
                ],
            }),
        });
        return new Response('Success', { status: 200 });
    } catch (err) {
        return new Response(`Error: ${err}`, { status: 500 });
    }
};

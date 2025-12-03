import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readTime.ts';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { siteConfig } from './src/data/site.config';
import { astroFont } from 'astro-font/integration';

import partytown from '@astrojs/partytown';

export default defineConfig({
    site: siteConfig.site,
    markdown: {
        remarkPlugins: [remarkReadingTime, remarkMath],
        rehypePlugins: [rehypeKatex],
        drafts: true,
    },
    integrations: [
        astroFont(),
        mdx({
            shikiConfig: {
                themes: {
                    light: 'one-light',
                    dark: 'tokyo-night',
                },
            },
        }),
        sitemap(),
        tailwind(),
        partytown({
            config: {
                forward: ['dataLayer.push'],
            },
        }),
    ],
    redirects: {
        '/content/[...slug]': '/posts/[...slug]',
        '/categories/[...slug]': '/categories/[...slug]/1',
        '/series/[...slug]': '/series/[...slug]/1',
        '/projects/[...slug]': '/projects/[...slug]/1',
        '/tags/[...slug]': '/projects/[...slug]/1',
    },
    env: {
        schema: {
            PUBLIC_CLOUDINARY_CLOUD_NAME: envField.string({
                context: 'client',
                access: 'public',
            }),
            AWS_ACCESS_KEY_ID: envField.string({
                context: 'server',
                access: 'public',
            }),
            AWS_SECRET_ACCESS_KEY: envField.string({
                context: 'server',
                access: 'secret',
            }),
            FROM_EMAIL: envField.string({
                context: 'server',
                access: 'secret',
            }),
            TO_EMAIL: envField.string({
                context: 'server',
                access: 'secret',
            }),
            MAILCHIMP_API_KEY: envField.string({
                context: 'server',
                access: 'secret',
            }),
            MAILCHIMP_AUDIENCE_ID: envField.string({
                context: 'server',
                access: 'secret',
            }),
            MAILCHIMP_SERVER_PREFIX: envField.string({
                context: 'server',
                access: 'public',
            }),
        },
    },
});

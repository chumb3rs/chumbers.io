import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readTime.ts';
import { siteConfig } from './src/data/site.config';
import { astroFont } from 'astro-font/integration';

// https://astro.build/config
export default defineConfig({
    site: siteConfig.site,
    markdown: {
        remarkPlugins: [remarkReadingTime],
        drafts: true,
        shikiConfig: {
            theme: 'material-theme-palenight',
            wrap: true,
        },
    },
    integrations: [
        astroFont(),
        mdx({
            syntaxHighlight: 'shiki',
            shikiConfig: {
                experimentalThemes: {
                    light: 'vitesse-light',
                    dark: 'material-theme-palenight',
                },
                wrap: true,
            },
            drafts: true,
        }),
        sitemap(),
        tailwind(),
    ],
});

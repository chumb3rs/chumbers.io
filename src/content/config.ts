import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string().max(80),
            description: z.string(),
            // Transform string to Date object
            pubDate: z
                .string()
                .or(z.date())
                .transform((val) => new Date(val)),
            heroImage: image(),
            category: z.string(),
            series: z.string().optional(),
            tags: z.array(z.string()),
            draft: z.boolean().default(false),
            featured: z.boolean().default(false),
            pinned: z.boolean().default(false),
        }),
});

const categories = defineCollection({
    schema: z.object({
        title: z.string().max(80),
        description: z.string(),
    }),
});

const series = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string().max(80),
            description: z.string(),
            heroImage: image(),
        }),
});

export const collections = { posts, categories, series };

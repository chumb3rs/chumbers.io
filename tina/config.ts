import { CATEGORIES } from '../src/data/categories.ts';
import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
    branch,
    clientId: null, // TODO: Get this from tina.io
    token: null, // TODO: Get this from tina.io

    build: {
        outputFolder: 'admin',
        publicFolder: 'public',
    },
    media: {
        tina: {
            mediaRoot: '/src/assets/images',
            publicFolder: '',
        },
    },
    schema: {
        collections: [
            {
                name: 'post',
                label: 'Post',
                path: 'src/content/posts',
                format: 'mdx',
                fields: [
                    {
                        type: 'image',
                        label: 'Cover Image',
                        required: true,
                        name: 'heroImage',
                        description: 'The image used for the cover of the post',
                    },
                    {
                        type: 'reference',
                        label: 'Category',
                        name: 'category',
                        collections: ['category'],
                    },
                    {
                        type: 'reference',
                        label: 'Project',
                        name: 'project',
                        collections: ['project'],
                    },
                    {
                        type: 'reference',
                        label: 'Series',
                        name: 'series',
                        collections: ['series'],
                    },
                    {
                        type: 'string',
                        label: 'description',
                        required: true,
                        name: 'description',
                        description: 'A short description of the post',
                    },
                    {
                        type: 'datetime',
                        name: 'pubDate',
                        label: 'Publication Date',
                        required: true,
                    },
                    {
                        name: 'draft',
                        label: 'Draft',
                        type: 'boolean',
                        description:
                            'If this is checked the post will not be published',
                    },
                    {
                        type: 'string',
                        name: 'tags',
                        required: true,
                        label: 'Tags',
                        description: 'Tags for this post',
                        list: true,
                        ui: {
                            component: 'tags',
                        },
                    },
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'rich-text',
                        label: 'Body',
                        name: 'SButton',
                        isBody: true,
                        templates: [
                            // Custom Components
                            {
                                label: 'SButton',
                                name: 'SButton',
                                fields: [
                                    {
                                        type: 'rich-text',
                                        label: 'SButton',
                                        name: 'children',
                                        isBody: true,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'category',
                label: 'Category',
                path: 'src/content/categories',
                fields: [
                    {
                        type: 'string',
                        label: 'Title',
                        name: 'title',
                        isTitle: true,
                        required: true,
                        options: [...CATEGORIES],
                    },
                    {
                        type: 'image',
                        label: 'Cover Image',
                        required: true,
                        name: 'heroImage',
                        description:
                            'The image used for the cover of the category',
                    },
                    {
                        type: 'string',
                        label: 'Description',
                        name: 'description',
                        required: true,
                    },
                ],
            },
            {
                name: 'project',
                label: 'Project',
                path: 'src/content/projects',
                format: 'mdx',
                fields: [
                    {
                        type: 'string',
                        label: 'Title',
                        name: 'title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        label: 'Description',
                        name: 'description',
                    },
                    {
                        type: 'string',
                        name: 'tags',
                        required: true,
                        label: 'Tags',
                        description: 'Tags for this post',
                        list: true,
                        ui: {
                            component: 'tags',
                        },
                    },
                    {
                        type: 'datetime',
                        label: 'Publication Date',
                        name: 'pubDate',
                    },
                    {
                        type: 'datetime',
                        label: 'Last Updated Date',
                        name: 'lastUpdatedDate',
                    },
                    {
                        type: 'rich-text',
                        label: 'Body',
                        name: 'body',
                        isBody: true,
                    },
                ],
            },
            {
                name: 'series',
                label: 'Series',
                path: 'src/content/series',
                format: 'mdx',
                fields: [
                    {
                        type: 'string',
                        label: 'Title',
                        name: 'title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        label: 'Description',
                        name: 'description',
                    },
                    {
                        type: 'rich-text',
                        label: 'Body',
                        name: 'body',
                        isBody: true,
                    },
                ],
            },
        ],
    },
});

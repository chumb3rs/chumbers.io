import { getCollection } from 'astro:content';

export const getPosts = async (max?: number) => {
    return (await getCollection('posts'))
        .filter((post) => !post.data.draft)
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
        .slice(0, max);
};

export const getTags = async () => {
    const posts = await getCollection('posts');
    const tags = new Set();
    posts
        .filter((post) => !post.data.draft)
        .forEach((post) => {
            post.data.tags.forEach((tag) => {
                if (tag != '') {
                    tags.add(tag.toLowerCase());
                }
            });
        });

    return Array.from(tags);
};

export const getPostByTag = async (tag: string) => {
    const posts = await getPosts();
    const lowercaseTag = tag.toLowerCase();
    return posts
        .filter((post) => !post.data.draft)
        .filter((post) => {
            return post.data.tags.some(
                (postTag) => postTag.toLowerCase() === lowercaseTag,
            );
        });
};

export const filterPostsByCategory = async ({
    category,
    max,
}: {
    category?: string;
    max?: number;
} = {}) => {
    const posts = await getPosts();
    return posts
        .filter((post) => !post.data.draft)
        .filter((post) =>
            category ? post.data.category.toLowerCase() === category : true,
        )
        .slice(0, max);
};

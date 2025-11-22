import { getCollection } from 'astro:content';

export const getPosts = async (max?: number) => {
    return (await getCollection('posts'))
        .filter((post) => !post.data.draft)
        .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
        .slice(0, max);
};

export const getLandingPosts = async (max?: number) => {
    const posts = (await getCollection('posts')).filter(
        (post) => !post.data.draft,
    );

    // 1. Find pinned posts
    const pinned = posts.filter((p) => p.data.pinned);

    if (pinned.length > 1) {
        throw new Error(
            'Multiple posts have `isPinnedPost: true`. Only one pinned post is allowed.',
        );
    }

    // Remove pinned post from main list if it exists
    const nonPinned = pinned.length
        ? posts.filter((p) => !p.data.pinned)
        : posts;

    // 2. Sort non-pinned posts: featured first, then by date desc
    const sorted = nonPinned.sort((a, b) => {
        // Featured posts first
        if (a.data.featured && !b.data.featured) return -1;
        if (!a.data.featured && b.data.featured) return 1;

        // Otherwise sort by pubDate desc
        return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
    });

    // 3. If pinned exists, put it at index 0
    const finalPosts = pinned.length === 1 ? [pinned[0], ...sorted] : sorted;

    return finalPosts.slice(0, max);
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

    return Array.from(tags).sort();
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

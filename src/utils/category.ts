import { getCollection, getEntry } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { CATEGORIES } from '@/data/utils';

export const getCategories = async () => {
    return (await getCollection('categories')).sort((a, b) =>
        a.data.title < b.data.title ? 1 : -1,
    );
};

export const getCategory = async (
    category: string | '',
): Promise<CollectionEntry<'categories'> | null> => {
    if (!category) return null;
    return await getEntry('categories', `${category}.md`);
};

export const getNonEmptyCategories = async () => {
    const posts = await getCollection('posts');
    const categories = new Set(
        posts
            .filter((post) => !post.data.draft)
            .map((post) => post.data.category),
    );
    return Array.from(categories).sort((a, b) =>
        CATEGORIES.indexOf(a) < CATEGORIES.indexOf(b) ? -1 : 1,
    );
};

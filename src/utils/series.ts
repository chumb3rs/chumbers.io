import { getCollection, getEntry } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export const getAllSeries = async (): Promise<CollectionEntry<'series'>[]> => {
    return (await getCollection('series')).sort((a, b) =>
        a.data.title < b.data.title ? -1 : 1,
    );
};

export const getSeries = async (
    series: string | '',
): Promise<CollectionEntry<'series'> | null> => {
    if (!series) return null;
    return await getEntry('series', `${series}.mdx`);
};

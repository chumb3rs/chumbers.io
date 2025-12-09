import { getCollection, getEntry } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export const getAllProjects = async (): Promise<
    CollectionEntry<'projects'>[]
> => {
    return (await getCollection('projects')).sort((a, b) =>
        a.data.title < b.data.title ? -1 : 1,
    );
};

export const getProject = async (
    project: string | '',
): Promise<CollectionEntry<'projects'> | null> => {
    if (!project) return null;
    return await getEntry('projects', project);
};

import { getCollection, getEntry } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { StatusEnum } from '@/data/utils';

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

export const getProjectStatus = (
    startDate: string,
    endDate: string,
): StatusEnum => {
    const today = new Date();
    if (today < new Date(startDate)) {
        return StatusEnum.Not_started;
    } else if (endDate == '') {
        return StatusEnum.In_progress;
    }

    return StatusEnum.Completed;
};

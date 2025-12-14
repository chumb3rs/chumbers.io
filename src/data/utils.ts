// List of categories for posts
export const CATEGORIES = [
    'Blog',
    'Newsletter',
    'Travel',
    'Maths',
    'Literature',
    'Essays',
    'Learn',
] as const;

export const PROJECT_STATUSES = [
    'Not Started',
    'In Progress',
    'Completed',
    'Paused',
    'Abandoned',
] as const;

export enum ContentTypeEnum {
    Posts = 'posts',
    Categories = 'categories',
    Tags = 'tags',
    Series = 'series',
    Projects = 'projects',
    Archive = 'archive',
}

export enum StatusEnum {
    Not_started = 'Not started',
    In_progress = 'In progress',
    Completed = 'Completed',
    Abandoned = 'Abandoned',
}

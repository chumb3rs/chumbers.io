import { ContentTypeEnum } from './utils';

interface SiteConfig {
    site: string;
    author: string;
    title: string;
    displayTitle: string;
    description: string;
    lang: string;
    ogLocale: string;
    shareMessage: string;
    paginationSize: number;
}

export const siteConfig: SiteConfig = {
    site: 'https://chumbers.io',
    author: 'Nick Marks',
    title: 'chumbers.io',
    displayTitle: 'chumbers',
    description: 'A knowledge sharing site, by chumbers',
    lang: 'en-AU',
    ogLocale: 'en_AU',
    shareMessage: 'Share this post',
    paginationSize: 6,
};

export const sitePaths: Record<ContentTypeEnum, string> = {
    [ContentTypeEnum.Posts]: '/posts',
    [ContentTypeEnum.Categories]: '/categories',
    [ContentTypeEnum.Tags]: '/tags',
    [ContentTypeEnum.Series]: '/series',
    [ContentTypeEnum.Projects]: '/projects',
    [ContentTypeEnum.Archive]: '/archive',
};

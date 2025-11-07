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
    site: 'https://chumbers.io', // Write here your website url
    author: 'Nick Marks', // Site author
    title: 'chumbers.io', // Site title.
    displayTitle: 'chumbers',
    description: 'A knowledge sharing site, by chumbers', // Description to display in the meta tags
    lang: 'en-AU',
    ogLocale: 'en_AU',
    shareMessage: 'Share this post', // Message to share a post on social media
    paginationSize: 6, // Number of posts per page
};

export const sitePaths = {
    posts: '/posts',
    categories: '/categories',
    tags: '/tags',
    series: '/series',
    projects: '/projects',
};

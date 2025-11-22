import type { CollectionEntry } from 'astro:content';

export interface PostsByYear {
    year: number;
    count: number;
    posts: CollectionEntry<'posts'>[];
}

export interface PostsByMonth {
    year: number;
    month: number;
    monthName: string;
    count: number;
    posts: CollectionEntry<'posts'>[];
}

export interface ArchiveData {
    years: PostsByYear[];
    totalPosts: number;
}

const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

/**
 * Groups posts by year with counts
 */
export function groupPostsByYear(
    posts: CollectionEntry<'posts'>[],
): PostsByYear[] {
    const yearMap = new Map<number, CollectionEntry<'posts'>[]>();

    posts.forEach((post) => {
        const year = post.data.pubDate.getFullYear();
        if (!yearMap.has(year)) {
            yearMap.set(year, []);
        }
        yearMap.get(year)!.push(post);
    });

    return Array.from(yearMap.entries())
        .map(([year, yearPosts]) => ({
            year,
            count: yearPosts.length,
            posts: yearPosts.sort(
                (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
            ),
        }))
        .sort((a, b) => b.year - a.year); // Most recent year first
}

/**
 * Groups posts by month within a specific year
 */
export function groupPostsByMonth(
    posts: CollectionEntry<'posts'>[],
    year: number,
): PostsByMonth[] {
    const yearPosts = posts.filter(
        (post) => post.data.pubDate.getFullYear() === year,
    );
    const monthMap = new Map<number, CollectionEntry<'posts'>[]>();

    yearPosts.forEach((post) => {
        const month = post.data.pubDate.getMonth();
        if (!monthMap.has(month)) {
            monthMap.set(month, []);
        }
        monthMap.get(month)!.push(post);
    });

    return Array.from(monthMap.entries())
        .map(([month, monthPosts]) => ({
            year,
            month,
            monthName: MONTH_NAMES[month],
            count: monthPosts.length,
            posts: monthPosts.sort(
                (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
            ),
        }))
        .sort((a, b) => b.month - a.month); // Most recent month first
}

/**
 * Gets posts for a specific year
 */
export function getPostsByYear(
    posts: CollectionEntry<'posts'>[],
    year: number,
): CollectionEntry<'posts'>[] {
    return posts
        .filter((post) => post.data.pubDate.getFullYear() === year)
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/**
 * Gets posts for a specific year and month
 */
export function getPostsByYearMonth(
    posts: CollectionEntry<'posts'>[],
    year: number,
    month: string,
): CollectionEntry<'posts'>[] {
    const monthIndex = MONTH_NAMES.findIndex(
        (name) => name.toLowerCase() === month.toLowerCase(),
    );
    if (monthIndex === -1) return [];

    return posts
        .filter((post) => {
            const postDate = post.data.pubDate;
            return (
                postDate.getFullYear() === year &&
                postDate.getMonth() === monthIndex
            );
        })
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/**
 * Creates complete archive data structure
 */
export function createArchiveData(
    posts: CollectionEntry<'posts'>[],
): ArchiveData {
    const years = groupPostsByYear(posts);

    return {
        years,
        totalPosts: posts.length,
    };
}

/**
 * Gets month name from month number (0-based)
 */
export function getMonthName(monthIndex: number): string {
    return MONTH_NAMES[monthIndex] || '';
}

/**
 * Gets month index from month name
 */
export function getMonthIndex(monthName: string): number {
    return MONTH_NAMES.findIndex(
        (name) => name.toLowerCase() === monthName.toLowerCase(),
    );
}

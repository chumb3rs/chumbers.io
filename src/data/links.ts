import type { SocialNetwork } from 'src/types/socials';
import ArchiveIcon from '@/components/icons/ArchiveIcon';
import CategoryIcon from '@/components/icons/CategoryIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import ProjectIcon from '@/components/icons/ProjectIcon';
import SeriesIcon from '@/components/icons/SeriesIcon';
import TagIcon from '@/components/icons/TagIcon';
import type { PageLink } from '@/types/pageLinks';
import type { IContentType } from '@/types/contentType';

export const SOCIALNETWORKS: SocialNetwork[] = [
    {
        name: 'Github',
        url: 'https://github.com/chumb3rs',
        icon: GithubIcon,
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/__nickmx',
        icon: InstagramIcon,
    },
] as const;

export const footerLinks: PageLink[] = [
    {
        text: 'About',
        url: '/about',
    },
    {
        text: 'Contact',
        url: '/contact',
    },
    {
        text: 'Subscribe',
        url: '/subscribe',
    },
    {
        text: 'Resume',
        url: '/NicholasMarks_Resume.pdf',
        openInNewTab: true,
    },
] as const;

export const contentTypes: IContentType[] = [
    {
        name: 'Archive',
        icon: ArchiveIcon,
    },
    {
        name: 'Categories',
        icon: CategoryIcon,
    },
    {
        name: 'Projects',
        icon: ProjectIcon,
    },
    {
        name: 'Series',
        icon: SeriesIcon,
    },
    {
        name: 'Tags',
        icon: TagIcon,
    },
] as const;

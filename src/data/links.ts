import type { SocialNetwork } from 'src/types/socials';
import GithubIcon from '@/components/icons/GithubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import type { PageLink } from '@/types/pageLinks';

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
        text: 'Resume',
        url: '/resume',
    },
] as const;

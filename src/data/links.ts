import type { SocialNetwork } from 'src/types/socials';
import GithubIcon from '@/components/icons/GithubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';

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

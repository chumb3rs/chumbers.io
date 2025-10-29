import type { SocialNetwork } from 'src/types/socials';
import GithubIcon from '@/components/icons/GithubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';

export const SOCIALNETWORKS: SocialNetwork[] = [
    {
        name: 'Github',
        url: 'https://github.com/chumb3rs/chumbers.io',
        icon: GithubIcon,
    },
    {
        name: 'Twitter',
        url: 'https://github.com/danielcgilibert/blog-template',
        icon: TwitterIcon,
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/__nickmx',
        icon: InstagramIcon,
    },
] as const;

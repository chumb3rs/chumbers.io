import type { IconType } from 'react-icons';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    icon?: IconType;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://chumbers.io',
    title: 'Chumbers',
    subtitle: 'The place I call home',
    description:
        'A personal essay site for Chumb3rs',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme',
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/',
        },
        {
            text: 'Projects',
            href: '/projects',
        },
        {
            text: 'Blog',
            href: '/blog',
        },
        {
            text: 'Categories',
            href: '/categories',
        },
        {
            text: 'Tags',
            href: '/tags',
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about',
        },
        {
            text: 'Contact',
            href: '/contact',
        },
        {
            text: 'Subscribe',
            href: '/subscribe',
        },
        {
            text: 'Resume',
            href: '/resume',
        },
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/',
            icon: FaInstagram,
        },
        {
            text: 'GitHub',
            href: 'https://github.com/chumb3rs',
            icon: FaGithub,
        },
        {
            text: 'YouTube',
            href: 'https://www.youtube.com/@chumbers.',
            icon: FaYoutube,
        },
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "I'm **Ethan Donovan**, a web developer at Amazing Studio, dedicated to the realms of collaboration and artificial intelligence. My approach involves embracing intuition, conducting just enough research, and leveraging aesthetics as a catalyst for exceptional products. I have a profound appreciation for top-notch software, visual design, and the principles of product-led growth. Feel free to explore some of my coding endeavors on <a href='https://github.com/JustGoodUI/dante-astro-theme'>GitHub</a> or follow me on <a href='https://twitter.com/justgoodui'>Twitter/X</a>.",
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer',
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact',
            },
        ],
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#',
    },
    postsPerPage: 8,
    projectsPerPage: 8,
};

export default siteConfig;

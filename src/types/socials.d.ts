export interface SocialNetwork {
    /** The display name of the platform, e.g. "Twitter" */
    name: string;

    /** The URL to your profile or page */
    url: string;

    /** The imported Astro component for the platform icon */
    icon: AstroComponent;
}

export type AstroComponent = import('astro').AstroComponentFactory;

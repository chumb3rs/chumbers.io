export interface IContentType {
    name: String;

    /** The icon to show next to the content type */
    icon: AstroComponent;
}

export type AstroComponent = import('astro').AstroComponentFactory;

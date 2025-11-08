export { sluglify, unsluglify } from './sluglify';
export { cn } from './cn';
export {
    getPosts,
    getTags,
    getPostByTag,
    filterPostsByCategory,
} from './post';
export {
    getCategories,
    getCategory,
    getNonEmptyCategories,
} from './category';
export { remarkReadingTime } from './readTime';

const capitalizeWord = (word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
};

export { capitalizeWord };

/** @type {import("prettier").Config} */
module.exports = {
    // General formatting
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,

    // Astro, HTML, CSS
    htmlWhitespaceSensitivity: 'css',
    plugins: [
        'prettier-plugin-astro', // for .astro files
    ],

    // Astro support (Prettier 3)
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
                tabWidth: 4,
                useTabs: false,
                singleQuote: true,
                jsxSingleQuote: true,
            },
        },
        {
            files: '*.json',
            options: {
                tabWidth: 4,
                useTabs: false,
                trailingComma: 'none',
            },
        },
        {
            files: ['*.css', '*.scss'],
            options: {
                tabWidth: 4,
                useTabs: false,
            },
        },
    ],
};

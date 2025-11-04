/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
    theme: {
        extend: {
            colors: {
                white: '#f8f9fa',
                black: '#1b1b1b',
                primary: '#4ef6c7'
            },
            fontFamily: {
                body: ['manrope', ...defaultTheme.fontFamily.sans],
                heading: ['playfair-display', ...defaultTheme.fontFamily.serif],
                sans: ['manrope', ...defaultTheme.fontFamily.sans],
                code: ['fira-code', ...defaultTheme.fontFamily.mono],
            },
            gridTemplateColumns: {
                list: 'repeat(auto-fill, minmax(400px, max-content))',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};

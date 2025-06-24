/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['"EB Garamond Variable"', 'serif'],
				body: ['"Manrope Variable"', 'sans-serif'],
				code: ['"JetBrains Mono Variable"', 'monospace']
			}
		},
	},
	plugins: [],
}

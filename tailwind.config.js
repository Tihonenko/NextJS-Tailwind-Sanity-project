const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			screens: {
				xs: '320px',
				xmd: '834px',
				'2xl': '1400px',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '0.5rem',
					md: '1.25rem',
				},
			},
			fontFamily: {
				Inter: 'var(--font-inter), serif',
				Helvetica: 'var(--font-helvetica)',
			},
			colors: {
				white: '#ECECEC',
				pink: '#F14F94',
			},
		},
	},
	plugins: [
		plugin(function ({ addComponents, theme }) {
			addComponents({
				// '.slider-container': {
				// 	marginLeft: (100 % -theme('screens.md')) / 2 + '40px',
				// },
			});
		}),
	],
};

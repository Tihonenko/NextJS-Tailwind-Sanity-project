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
				lightwhite: '#ECECEC',
				pink: '#F14F94',
				lightgray: '#4B4B4B',
			},
			borderStyle: {
				solid: 'solid',
			},
		},
	},
	plugins: [
		plugin(function ({ addComponents, theme }) {
			addComponents({
				// '.slider-container': {
				// 	marginLeft: (100 % -theme('screens.md')) / 2 + '40px',
				// },
				'.border-title': {
					borderBottom: theme('borderWidth.DEFAULT'),
					borderColor: theme('borderColor.DEFAULT'),
					borderStyle: theme('borderStyle.solid'),
					paddingBottom: theme('spacing.7'),
					fontSize: '2rem',
					fontWeight: theme('fontWeight.bold'),
				},
			});
		}),
	],
};

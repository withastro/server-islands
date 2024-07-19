import colors from 'tailwindcss/colors';

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			colors: {
				gray: colors.stone,
			},
			keyframes: () => ({
				loading: {
					'0%': {
						opacity: '.2',
					},
					'20%': {
						opacity: '1',
						transform: 'translateX(1px)',
					},
					to: {
						opacity: '.2',
					},
				},
				shimmer: {
					'100%': {
						transform: 'translateX(100%)',
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

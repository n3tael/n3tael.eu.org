import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			display: 'JetBrains Mono, monospace'
		},
		colors: {
			'main': {
				'100': '#8cd4b5',
				'200': '#7bba9f',
				'300': '#6aa189',
				'400': '#598773',
				'500': '#476b5b',
				'600': '#385448',
				'700': '#283d34',
				'800': '#1b2923',
				'900': '#0c1210'
			},
			'logo': '#418065',
			'gray': '#d1d5db'
		}
	},
	plugins: []
} as Config;

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
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
				'highlight': {
					'200': '#4E9978',
					'500': '#418065',
					'800': '#2a5341'
				}
			}
		}
	},
	plugins: []
} as Config;

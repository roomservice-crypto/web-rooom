const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				mona: ['Mona', ...defaultTheme.fontFamily.sans],
				helve: ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
				ibm: `'IBM Plex Mono', monospace`
			},
			colors: {
				primary: {
					500: '#FAE76C',
					25: '#FEFDF6'
				},
				secondary: '#C1BFFA',
				dark: '#1C1C1C',
				light: '#F7F9FB'
			},
			animation: {
				'spin-about-loops': 'spin 12s linear infinite',
				'spin-about-circle': 'spin 16s linear infinite'
			},
			transitionTimingFunction: {
				'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)'
			}
		},
		screens: {
			mobile: { max: '960px' },
			mini: { max: '360px' }
		}
	},
	plugins: []
}

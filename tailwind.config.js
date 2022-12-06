const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				mona: ['Mona', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				primary: {
					500: '#FAE76C',
					25: '#FEFDF6'
				},
				secondary: '#C1BFFA',
				dark: '#1C1C1C'
			},
			animation: {
				'spin-about-loops': 'spin 12s linear infinite',
				'spin-about-circle': 'spin 12s linear infinite',
			}
		}
	},
	plugins: []
}

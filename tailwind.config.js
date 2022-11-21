/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				// unbounded: ['Unbounded', ...defaultTheme.fontFamily.sans],
				fontspring: ['Fontspring', ...defaultTheme.fontFamily.sans],
				criteria: ['Criteria CF', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				primary: {
					500: '#FAE76C',
					25: '#FEFDF6'
				},
				secondary: '#C1BFFA',
				dark: '#131313'
			}
		}
	},
	plugins: []
}

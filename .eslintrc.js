/** @type {import('eslint').Linter.Config} */
module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: 'tsconfig.json'
	},
	plugins: ['react'],
	rules: {
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'prefer-regex-literals': 'off',
		'no-void': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/promise-function-async': 'off'
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
}

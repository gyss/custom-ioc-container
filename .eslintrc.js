module.exports = {
	env: {
		node: true,
		es6: true,
		jest: true,
	},
	extends: [
		'plugin:jest/recommended',
		'plugin:jest-formatting/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	plugins: ['import', 'jest-formatting'],
	rules: {
		'no-console': 0,
	},
}

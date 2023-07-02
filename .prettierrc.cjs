/** @type {import("prettier").Config} */
module.exports = {
	plugins: [require.resolve('prettier-plugin-tailwindcss')],
	useTabs: true,
	tabWidth: 4,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: false,
	trailingComma: 'all',
	bracketSpacing: true,
	bracketSameLine: false,
}

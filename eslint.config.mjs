import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
	rules: {
		semi: ['error', 'never'],
		quotes: ['error', 'single'],
		indent: ['error', 4],
	},
});

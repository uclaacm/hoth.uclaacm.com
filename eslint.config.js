import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
		ignores: ['dist/', 'node_modules/'],
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			quotes: ['error', 'single', { avoidEscape: true }],
			'react/prop-types': 'off',
			'react/no-unescaped-entities': 'off',
		},
		settings: {
			react: {
				version: '18.3.1',
			},
		},
	},
];

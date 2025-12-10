// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// @ts-check
import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';

export default tseslint.config({
    languageOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        globals: {
            ...globals.browser,
            ...globals.node,
            myCustomGlobal: 'readonly',
        },
    },
}, {
    plugins: {
        'react': eslintPluginReact,
        'prettier': eslintPluginPrettier,
        '@typescript-eslint': eslintPluginTypescript,
    },
}, {
    settings: {
        react: {
            version: 'detect',
        },
        stencil: {
            version: 'latest',
        },
    },
}, {
    rules: {
        // Disable no-unused-vars for specific use cases
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: true,
            },
        ],

        // Other commonly helpful rules
        'no-console': 'warn',
        'no-debugger': 'error',
        'react/jsx-key': 'error',
        'react/prop-types': 'off',

        // TypeScript-specific rules
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
    },
}, {
    files: ['**/*.ts', '**/*.tsx'],
}, { ignores: ['node_modules/*', 'dist/*', 'build/*', 'public/*', 'www/*', '.*/*', 'src/*.d.ts', '*.config.ts', '*.config.mjs', '*.config.js', 'coverage/*'] }, eslint.configs.recommended, tseslint.configs.recommended, storybook.configs["flat/recommended"]);

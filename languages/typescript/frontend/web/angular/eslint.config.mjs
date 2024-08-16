import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import _import from 'eslint-plugin-import';
import header from 'eslint-plugin-header';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/.cache',
      '**/build',
      '**/coverage',
      '**/dist',
      '**/node_modules',
      '**/public',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'prettier'
    )
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
      header,
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
    },

    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        project: 'tsconfig.json',
      },
    },

    rules: {
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      curly: 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-duplicates': 'error',

      'import/no-extraneous-dependencies': [
        'off',
        {
          devDependencies: false,
        },
      ],

      'import/no-unassigned-import': [
        'error',
        {
          allow: ['symbol-observable'],
        },
      ],

      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
          },

          groups: [['builtin', 'external'], 'parent', 'sibling', 'index'],
        },
      ],

      'max-len': [
        'error',
        {
          code: 140,
          ignoreUrls: true,
        },
      ],

      'max-lines-per-function': [
        'error',
        {
          max: 200,
        },
      ],

      'no-caller': 'error',

      'no-empty': [
        'error',
        {
          allowEmptyCatch: true,
        },
      ],

      'no-eval': 'error',
      'no-multiple-empty-lines': ['error'],
      'no-throw-literal': 'error',

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
      ],

      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],

      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],

      'no-case-declarations': 'off',
      'no-fallthrough': 'off',
      'no-underscore-dangle': 'off',
      '@typescript-eslint/await-thenable': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-implied-eval': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/prefer-regexp-exec': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
  {
    files: ['!modules/**', '**/*.spec.ts'],

    rules: {
      'max-lines-per-function': 'off',
    },
  },
];

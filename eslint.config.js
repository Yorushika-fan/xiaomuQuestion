import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginPrettier from 'eslint-plugin-prettier/recommended'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'

/** @type {import('eslint').Linter.Config[]} */
export default [
    // 基础配置
    {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
    {
        languageOptions: {
            globals: globals.browser
        }
    },
    {
        ignores: [
            '*.sh',
            'node_modules',
            '*.md',
            '*.woff',
            '*.ttf',
            '.vscode',
            '.idea',
            'dist',
            '/public',
            '/docs',
            '.husky',
            '.local',
            '/bin',
            'Dockerfile'
        ]
    },

    // React 相关规则
    {
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
            'no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    args: 'after-used',
                    ignoreRestSiblings: true,
                    varsIgnorePattern: '^_',
                    argsIgnorePattern: '^_'
                }
            ],
            'no-undef': 'error'
        }
    },

    // 未使用导入处理
    {
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'unused-imports': unusedImports
        },
        rules: {
            'no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_'
                }
            ]
        }
    },

    // 插件配置
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            'react/react-in-jsx-scope': 'off'
        }
    },
    pluginPrettier
]

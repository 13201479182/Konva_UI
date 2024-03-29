/**
 * js 代码规则制定(https://eslint.org/docs/latest/rules)
 * 针对js语法规则
 */
const jsRules = {
    'for-direction': 2,
    'getter-return': 2,
    'no-async-promise-executor': 2,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-console': 1,
    'no-constant-condition': 2,
    'no-debugger': 1,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-implicit-coercion': 2,
    'no-lone-blocks': 2,
    'no-new-wrappers': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-script-url': 2,
    'no-throw-literal': 2,
    'no-useless-call': 2,
    'no-useless-escape': 2,
    'prefer-named-capture-group': 2,
    'prefer-promise-reject-errors': 2,
    'require-await': 2,
    'require-unicode-regexp': 2,
    'no-warning-comments': [
        2,
        {
            terms: ['todo', 'fix'],
            location: 'start',
        },
    ],
    'yoda': 2,
    'camelcase': 2,
    'consistent-this': [2, 'self'],
    'line-comment-position': 2,
    'max-depth': [2, 4],
    'max-lines': [2, 300],
    'max-lines-per-function': [2, 30],
    'max-statements-per-line': [
        2,
        {
            max: 1,
        },
    ],
    'new-cap': 2,
    'no-mixed-operators': [
        2,
        {
            groups: [
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['&&', '||'],
            ],
            allowSamePrecedence: true,
        },
    ],
    'constructor-super': 2,
    'prefer-rest-params': 2,

    'no-redeclare': 2,
    'no-unused-vars': 2,
    'no-use-before-define': 2,
    'no-shadow': 2,
};

/**
 * ts 代码规则制定(https://typescript-eslint.io/rules/adjacent-overload-signatures)
 * 针对ts语法规则
 */
const tsRules = {
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': [
        2,
        {
            default: 'array',
            readonly: 'array',
        },
    ],
    '@typescript-eslint/ban-types': 2,
    '@typescript-eslint/class-literal-property-style': [2, 'fields'],
    '@typescript-eslint/consistent-generic-constructors': [2, 'constructor'],
    '@typescript-eslint/consistent-indexed-object-style': [2, 'index-signature'],
    '@typescript-eslint/consistent-type-assertions': [
        2,
        {
            assertionStyle: 'angle-bracket',
        },
    ],
};

/**
 * vue 代码规则制定(https://eslint.vuejs.org/rules/)
 * 针对vue语法规则
 */
const vueRules = {
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-indent': 0,
    'vue/multi-word-component-names': 0,
    'vue/html-indent': [
        1,
        4,
        {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        },
    ],
    'vue/html-closing-bracket-newline': [
        1,
        {
            singleline: 'never',
            multiline: 'never',
            selfClosingTag: {
                singleline: 'never',
                multiline: 'always',
            },
        },
    ],
};

module.exports = {
    root: true,

    overrides: [
        // js & cjs 文件处理
        {
            files: ['*.js', '*.cjs'],
            rules: {
                ...jsRules,
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            plugins: ['prettier'],
        },

        // ts 文件处理
        {
            files: ['src/**/*.ts', 'package/**/*.ts', 'vite.config.ts'],
            rules: {
                ...jsRules,
                ...tsRules,
            },
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            plugins: ['@typescript-eslint', 'prettier'],
        },

        // vue 文件处理
        {
            files: ['*.vue'],
            extends: ['plugin:vue/vue3-recommended'],
            rules: {
                ...jsRules,
                ...tsRules,
                ...vueRules,
            },
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                ecmaVersion: 'latest',
                sourceType: 'module',
                extraFileExtensions: ['.vue'],
            },
        },
    ],
};

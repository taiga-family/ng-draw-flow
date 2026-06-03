import taiga from '@taiga-ui/eslint-plugin-experience-next';

export default [
    ...taiga.configs.recommended,
    {
        files: ['**/legacy/**/*.ts'],
        rules: {
            '@angular-eslint/prefer-standalone': 'off',
        },
    },
    {
        files: ['projects/demo/server.ts'],
        rules: {
            '@typescript-eslint/strict-void-return': 'off',
        },
    },
    {
        files: ['**/*.ts'],
        rules: {
            'import/no-cycle': 'off',
            '@typescript-eslint/no-unnecessary-condition': 'off',
            '@typescript-eslint/no-unused-private-class-members': 'off',
            'unicorn/no-array-method-this-argument': 'off',
            'no-restricted-syntax': 'off',
            '@typescript-eslint/max-params': ['error', {countVoidThis: true, max: 5}],
            '@angular-eslint/prefer-signals': 'off',
        },
    },
    {
        ignores: ['**/*.html', '**/*.js'],
    },
];

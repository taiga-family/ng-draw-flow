/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: ['plugin:@taiga-ui/experience/all'],
    overrides: [
        {
            files: ['*.ts'],
            rules: {
                '@taiga-ui/experience/strict-tui-doc-example': 'off',
                '@typescript-eslint/consistent-type-assertions': 'off',
                '@typescript-eslint/member-ordering': 'off',
                'rxjs/no-implicit-any-catch': 'off',
                'no-restricted-syntax': 'off',
            },
        }
    ]
};

export default {
    displayName: 'ng-draw-flow',
    preset: '../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    globals: {},
    coverageDirectory: '../../coverage/projects/ng-draw-flow',
    collectCoverageFrom: [
        '<rootDir>/src/lib/**/*.ts',
        '!<rootDir>/src/lib/**/*.spec.ts',
        '!<rootDir>/src/lib/**/index.ts',
        '!<rootDir>/src/lib/**/mocks/**',
    ],
    coverageThreshold: {
        global: {statements: 88, branches: 73, functions: 86, lines: 88},
    },
    transform: {
        '^.+\\.(ts|mjs|js|html|svg)$': [
            'jest-preset-angular',
            {stringifyContentPathRegex: String.raw`\.(html|svg)$`},
        ],
    },
    transformIgnorePatterns: ['node_modules/(?!.*.mjs$)'],
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment',
    ],
};

export default {
    displayName: 'ng-draw-flow-layouts',
    preset: '../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    coverageDirectory: '../../coverage/projects/layouts',
    collectCoverageFrom: [
        '<rootDir>/src/lib/**/*.ts',
        '!<rootDir>/src/lib/**/*.spec.ts',
        '!<rootDir>/src/lib/**/index.ts',
    ],
    coverageThreshold: {
        global: {statements: 95, branches: 83, functions: 93, lines: 94},
    },
    transform: {
        '^.+\\.(ts|mjs|js|html|svg)$': [
            'jest-preset-angular',
            {stringifyContentPathRegex: String.raw`\.(html|svg)$`},
        ],
    },
    transformIgnorePatterns: ['node_modules/(?!.*.mjs$|d3-hierarchy/)'],
};

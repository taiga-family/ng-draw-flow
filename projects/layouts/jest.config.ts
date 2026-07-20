export default {
    displayName: 'ng-draw-flow-layouts',
    preset: '../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    coverageDirectory: '../../coverage/projects/layouts',
    transform: {'^.+.(ts|mjs|js|html|svg)$': 'jest-preset-angular'},
    transformIgnorePatterns: ['node_modules/(?!.*.mjs$|d3-hierarchy/)'],
};

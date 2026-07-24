const nxPreset = require('@nx/jest/preset').default;
const {resolve} = require('node:path');

module.exports = {
    ...nxPreset,
    coverageReporters: ['lcov', 'clover'],
    transform: {
        ...nxPreset.transform,
        '^.+\\.(ts|js|html)$': [
            'ts-jest',
            {
                tsconfig: resolve(__dirname, 'tsconfig.spec.json'),
                stringifyContentPathRegex: String.raw`\.(html|svg)$`,
            },
        ],
    },
};

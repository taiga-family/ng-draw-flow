const nxPreset = require('@nx/jest/preset').default;
const {resolve} = require('path');

module.exports = {
    ...nxPreset,
    transform: {
        ...nxPreset.transform,
        '^.+\\.(ts|js|html)$': [
            'ts-jest',
            {
                tsconfig: resolve(__dirname, 'tsconfig.spec.json'),
                stringifyContentPathRegex: '\\.(html|svg)$',
            },
        ],
    },
};

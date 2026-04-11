import {readFileSync} from 'node:fs';
import {join} from 'node:path';

describe('draft-connection.component.svg', () => {
    it('declares a minimal visible svg viewport independent from container size', () => {
        const template = readFileSync(
            join(__dirname, 'draft-connection.component.svg'),
            'utf-8',
        );

        expect(template).toContain('width="1"');
        expect(template).toContain('height="1"');
        expect(template).toContain('overflow="visible"');
    });
});

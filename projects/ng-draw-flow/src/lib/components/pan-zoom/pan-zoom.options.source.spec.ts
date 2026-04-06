import {readFileSync} from 'node:fs';
import {join} from 'node:path';

describe('pan-zoom.options public api', () => {
    it('marks panSize as deprecated in DfPanZoomOptions', () => {
        const source = readFileSync(join(__dirname, 'pan-zoom.options.ts'), 'utf-8');

        expect(source).toContain('* @deprecated');
        expect(source).toContain('panSize: DfPanSize;');
        expect(source).toContain('Kept only for backward compatibility');
        expect(source).toContain('Dynamic workspace sizing ignores this option');
    });
});

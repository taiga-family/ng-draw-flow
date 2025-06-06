import {dfClamp} from './clamp';

describe('clamp', () => {
    it('returns min if value is smaller', () => {
        expect(dfClamp(1, 2, 5)).toBe(2);
    });

    it('returns max if value is bigger', () => {
        expect(dfClamp(6, 2, 5)).toBe(5);
    });

    it('returns value if it is in between the limits', () => {
        expect(dfClamp(3, 2, 5)).toBe(3);
    });
});

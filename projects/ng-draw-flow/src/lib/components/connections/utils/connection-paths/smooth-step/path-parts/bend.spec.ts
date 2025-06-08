import {point} from '../../../point';
import {bend} from './bend';

describe('buildBend', () => {
    it('returns a straight segment for colinear horizontal points', () => {
        const result = bend(point(0, 0), point(50, 0), point(100, 0), 20);

        expect(result).toBe('L50 0');
    });

    it('returns a straight segment for colinear vertical points', () => {
        const result = bend(point(0, 0), point(0, 50), point(0, 100), 20);

        expect(result).toBe('L0 50');
    });

    it('builds a horizontal→vertical bend turning downward', () => {
        const result = bend(point(0, 0), point(50, 0), point(50, 100), 20);

        expect(result).toBe('L 30,0Q 50,0 50,20');
    });

    it('builds a horizontal→vertical bend turning upward', () => {
        const result = bend(point(100, 100), point(50, 100), point(50, 0), 20);

        expect(result).toBe('L 70,100Q 50,100 50,80');
    });

    it('builds a vertical→horizontal bend turning right', () => {
        const result = bend(point(0, 0), point(0, 50), point(100, 50), 20);

        expect(result).toBe('L 0,30Q 0,50 20,50');
    });

    it('builds a vertical→horizontal bend turning left', () => {
        const result = bend(point(0, 100), point(0, 50), point(-100, 50), 20);

        expect(result).toBe('L 0,70Q 0,50 -20,50');
    });

    it('limits the radius to half the shorter leg when maxRadius is large', () => {
        // maxRadius is 100, but each leg is only 50 long ⇒ radius should collapse to 25
        const result = bend(point(0, 0), point(50, 0), point(50, 50), 100);

        expect(result).toBe('L 25,0Q 50,0 50,25');
    });
});

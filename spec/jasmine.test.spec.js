/**
 * Jasmine Unit tests for the is 100 module
 */

const isHundred = require('../');


describe('is 100', () => {
    it('should return true for all', () => {
        expect(isHundred(100)).toEqual(true);
        expect(isHundred(100.0)).toEqual(true);
    });

    it('should return false for all', () => {
        const notHundred = [
            'bill murray',
            2,
        ];
        // TODO: think of some other things that aren't 100
        notHundred.forEach(x => {
            expect(isHundred(x)).toEqual(false);
        });
    });
});
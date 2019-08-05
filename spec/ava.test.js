import test from 'ava';
import isHundred from '../';
 
test('isHundredPass', t => {
    t.assert(isHundred(100));
    t.assert(isHundred(100.0));
});
 
test('isHundredFail', t => {
    t.false(isHundred('BATMAN'));
    t.false(isHundred(-0));
});
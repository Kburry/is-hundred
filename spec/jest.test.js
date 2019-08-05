const isHundred = require('../');

test('This should be 100', () => {
  expect(isHundred(100)).toBe(true);
  expect(isHundred(100.000000)).toBe(true);
});

test('This should not be 100', () => {
  expect(isHundred(-100)).toBe(false);
  expect(isHundred('100')).toBe(false);
});
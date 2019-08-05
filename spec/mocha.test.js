var assert = require('assert');
var isHundred = require('../');

describe('isHundredTests', function() {
  describe('isHundredPass', function() {
    it('should return true', function() {
      assert.equal(isHundred(100), true);
      assert.equal(isHundred(101.0-1), true);
    });
  });
  describe('isHundredFail', function() {
    it('should return false', function() {
      assert.equal(isHundred([100]), false);
      assert.equal(isHundred(101.0+1), false);
    });
  });
});
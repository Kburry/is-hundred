//I gave qunit it's own special place
const isHundred = require('../');

QUnit.test( "isHundredFail", function( assert ) {
  assert.equal(isHundred(100), true, "test 100");
  assert.equal(isHundred(100.0), true, "test 100.0");
});

QUnit.test( "isHundredFail", function( assert ) {
  assert.equal(isHundred(420), false, "test 100");
  assert.equal(isHundred(69), false, "test 100.0");
});
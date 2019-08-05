var test = require('tape');
var isHundred = require('../index')

test('isHundred', function (t) {
  t.plan(2);
  t.true(isHundred(100), "is hundred");
  t.assert(isHundred(100.0),"is hundred");
});

test('isntHundred', function (t) {
  t.plan(2);
  t.false(isHundred({}), "isn't Hundred");
  t.false(isHundred("<(0_0<) <(0_0)> (>0_0)>"), "Kirby Dance is not Hundred");
});
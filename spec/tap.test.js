var tap = require('tap');
var isHundred = require('../index')

tap.true(isHundred(100), "is hundred");
tap.assert(isHundred(100.0),"is hundred");

tap.false(isHundred({}), "isn't Hundred");
tap.false(isHundred("<(0_0<) <(0_0)> (>0_0)>"), "Kirby Dance is not Hundred");

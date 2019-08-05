const IsHundred = require('../index');

const { describe, it } = intern.getPlugin('interface.bdd');
const { expect } = intern.getPlugin('chai');

describe('isHundredPass', () => {
  it('should be true when we pass 100', () => {
    expect(IsHundred(100)).to.be.true;
    expect(IsHundred(100.0)).to.be.true;
  });
});

describe('isHundredFail', () => {
  it('should be false when we pass anything else', () => {
    expect(IsHundred('101 dalmations')).to.be.false;
    expect(IsHundred('my sanity')).to.be.false;
  });
});
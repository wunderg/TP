var expect = require('chai').expect;

var arrayPairSum = require('./arrayPairSum.js');

describe('All arrayPairSum Function', () => {
  it('Should exist', () => {
    expect(arrayPairSum).to.exist;
  });

  it('Should return [ [6, 4], [7, 3] ]', () => {
    var actual = arrayPairSum(10, [3, 4, 5, 6, 7]);
    var expected = [ [6, 4], [7, 3] ];

    expect(actual).to.be.eql(expected);
  });

  it('Should return [ [3, 5], [4, 4], [4, 4], [4, 4] ]', () => {
    var actual = arrayPairSum(8, [3, 4, 5, 4, 4]);
    var expected = [ [3, 5], [4, 4], [4, 4], [4, 4] ];

    expect(actual).to.be.eql(expected);
  });
})

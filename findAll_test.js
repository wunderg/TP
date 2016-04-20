var expect = require('chai').expect;

var findAll = require('./findAll.js');

describe('findAll', () => {

  it('Should exist', () => {
    expect(findAll).to.exist;
  });

  it('Should find the route in board with n = 1', () => {
    const expected = [[1,2]];
    const actual = findAll([1,2,3], 3);

    expect(actual).to.be.eql(expected);
  });

})

var expect = require('chai').expect;

var spiralTraversal = require('./spiralTraversal');

describe('SpiralTraversal', () => {

  it('Should exist', () => {
    expect(spiralTraversal).to.exist;
  });

  it('Should accept matrix 5 x 5 and output expected result', () => {
    const matrix = [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ];
    const expected = [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ];
    const actual = spiralTraversal(matrix);

    expect(actual).to.be.eql(expected);
  });

  it('Should accept matrix 3 x 3 and output expected result', () => {
    const matrix = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ], [ 16, 17, 18 ], [ 19, 20, 21 ], [ 22, 23, 24 ] ];
    const expected = [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ];
    const actual = spiralTraversal(matrix);

    expect(actual).to.be.eql(expected);
  });

  it('Should accept matrix 1 x 1 and output expected result', () => {
    const matrix = [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ];
    const expected = [ 1, 2, 3, 4 ];
    const actual = spiralTraversal(matrix);

    expect(actual).to.be.eql(expected);
  });
})

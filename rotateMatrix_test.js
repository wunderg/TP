var expect = require('chai').expect;

var robotPath = require('./rotateMatrix');

describe('rotateMatrix', () => {

  it('Should exist', () => {
    expect(rotateMatrix).to.exist;
  });

  it('Should accept matrix 2 x 2 and output expected result', () => {
    const matrix = [ [1, 2], [3, 4] ];
    const expected = [ [3, 1],[4, 2] ];
    const actual = rotateMatrix(matrix);

    expect(actual).to.be.eql(expected);
  });

  it('Should accept matrix 4 x 4 and output expected result', () => {
    const matrix = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, "A", "B", "C" ], [ "D", "E", "F", "G" ] ]
    const expected = [ [ "D", 9, 5, 1 ], [ "E", "A", 6, 2 ], [ "F", "B", 7, 3 ], [ "G", "C", 8, 4 ] ]

    const actual = rotateMatrix(matrix);

    expect(actual).to.be.eql(expected);
  });
})

function makeBoard(n) {
  var board = []
  for (var i = 0; i < n; i++) {
    board.push([])
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j]
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }
  return board
}

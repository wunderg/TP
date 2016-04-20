var expect = require('chai').expect;

var robotPath = require('./robotPath.js');

describe('robotPath', () => {

  it('Should exist', () => {
    expect(robotPath).to.exist;
  });

  it('Should find the route in board with n = 1', () => {
    const expected = 1;
    const actual = robotPath(1);

    expect(actual).to.be.eql(expected);
  });

  it('Should find all paths in the board with n = 2', () => {
    const expected = 2;

    const actual = robotPath(2);

    expect(actual).to.be.eql(expected);
  });

  it('Should find all paths in the board with n = 3', () => {
    const expected = 12;
    const actual = robotPath(3);

    expect(actual).to.be.eql(expected);
  });

  it('Should find all paths in the board with n = 4', () => {
    const expected = 184;
    const actual = robotPath(4);

    expect(actual).to.be.eql(expected);
  });

  it('Should find all paths in the board with n = 5', () => {
    const expected = 8512;
    const actual = robotPath(5);

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

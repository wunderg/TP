var expect = require('chai').expect;
var should = require('chai').should();
var bubbleSort = require('./bubbleSort')
//
// sort this array
//
describe('isSubsetOf', function(){
  
  it(': sort it', function() {
    Array.prototype.sort = null;
    var input = [20, -10, -10, 2, 4, 299];
    var expected = [-10, -10, 2, 4, 20, 299];
    var equals = bubbleSort(input).toString() === expected.toString();
    equals.should.equal(equals, true, 'output should match expected')
  });
      
//
// and this array
//

  it(': sort it', function() {
    Array.prototype.sort = null;
    var input = [2,2,2,2,2,22,2,2,222,2222,22,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,22];
    console.log(input.length)
    var expected = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22, 22, 22, 222, 2222];
    console.log(input.expected)
    var equals = bubbleSort(input).toString() === expected.toString();
    equals.should.equal(equals, true, 'output should match expected')
  });


//
// also this array, thank you
//    
  it(': sort it', function() {
    Array.prototype.sort = null;
    var input = [18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29, 40, 36];
    var expected = [18, 19, 20, 24, 24, 25, 26, 28, 29, 30, 30, 31, 35, 36, 36, 40];
    var equals = bubbleSort(input).toString() === expected.toString();
    equals.should.equal(equals, true, 'output should match expected')
  });


})

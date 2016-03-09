/*
 * Arrayception
Given an array of arbitrarily nested arrays, return n, where n is the deepest 
level that contains a non-array value.

Examples
Input  Output
array:
[ [ 5 ], [ [ ] ] ]  => 2
array:
[ 10, 20, 30, 40 ] => 1
array:
[ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ] => 4
array:
[ ] => 0
array:
[ [ [ ] ] ] => 0
*/

function arrayception(array) {
  // declare a max counter for levels
  var maxCounter = 0;
  // declare an level counter for levels that resets
  var levelCounter = 1;

  // create an inner function
  function inner(arr) {
    // itterate over the array
    arr.forEach(function(item) {
      // if item is array
      if (Array.isArray(item)) {
        // increment levelCounter and invoke the inner function again, passing the item as arg
        levelCounter += 1;
        inner(item);
      } else if (!Array.isArray(item)) {
        // set max counter to max of counter and item counter.
        maxCounter = Math.max(maxCounter, levelCounter);
      }
    });
    // reset counter to 1
    levelCounter = 1;
  }
  inner(array);
  //return max counter
  return maxCounter;
}

var w = arrayception([ 10, 20, 30, 40 ]);
var x = arrayception([
  [10, 20],
  [
    [30, [40]]
  ]
]);
var y = arrayception([
  [5],
  [
    []
  ]
]);
var z = arrayception([
  [
    []
  ]
]);
console.log('b', arrayception([[],[[],[],[0,[[]]],[]],[]])) // =>3 
console.log('w', w);
console.log('x', x);
console.log("y", y);
console.log('z', z);


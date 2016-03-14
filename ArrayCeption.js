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

/* version with inner function
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
    levelCounter -= 1;
  }
  inner(array);
  //return max counter
  return maxCounter;
}
*/


//create function name arrayception and pass an array, levelDepth n maxDepth
  //setup levelDepth to levelDepth or 1;
  //setup maxDepth to maxDepth or 0;
  //iterate over each element in the array
    //if element is an array?
      //increment levelDepth
      //invoke arraception and pass element and levelDepth and maxDepth
    //if elements in not array
      //set maxDepth greatest from levelDepth or maxDepth
    //decrement levelDepth

  //return maxDepth;


function arrayception(array, levelDepth, maxDepth) {
  levelDepth = levelDepth || 1;
   maxDepth = maxDepth || 0;

  array.forEach(function(elem) {
    if (Array.isArray(elem)) {
      levelDepth += 1;
      maxDepth = arrayception(elem, levelDepth, maxDepth);
      levelDepth -= 1;
    } else {
      maxDepth = Math.max(levelDepth, maxDepth);
    }
  });
  return maxDepth;
}

// 1.
// levelDepth = 1
// maxDepth = 0;
// 2.                                    2.1
// levelDepth = 2                            levelDepth = 2
// maxDepth = result of arrayception =>      maxDepth = 0;
// levelDepth = 1;
//
// 3.               3.1    3.2           3.3 item is not array
//   levelDepth = 2 same array is emmpty  levelDepth = 3
// max depth = 0 ; same array is empty     maxDepth = 3 else statemment
//
//

console.log('b', arrayception([[],[[],[],[0,[[]]],[]],[]])) // =>3


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

/*
 * Arrayception
Given an array of arbitrarily nested arrays, return n, where n is the deepest 
level that contains a non-array value.

Examples
Input  Output
array:
[ [ 5,[]], [ [ ] ] ]  => 2
// has two arrays, one with 4 levels but no items
// and one with two levels and an item, returns the one with the item
array:
[ 10, 20, 30, 40 ] => 1
// has one level where all the values are located, return 1
array:
[ [ 10, 20 ], [ [[ 40 ], 30 ] ] ] => 4
// the second elem has 4 levels where 40 is located, return 4
array:
[ ] => 0
// has one level but no values, returns 0
array:
[ [ [ ] ] ] => 0
// has many levels but no values, returns 0
*/

/*----------  Rules  ----------*/
// the deepest level must have an item to count as deepest level
// if the array has no items in the deepest levels, then return 0

/*----------  Algo  ----------*/
// look at each elem in the array
// if elem is array
  // go inside the array and increment level count
// if elem is NOT array
  // max level gets level count
  // go to next item inside that same level
// if you go up current level, decrement level count
// return max level

/*----------  PCode  ----------*/
// create arrayception func that takes in array as arg
  // maxLevel counter set to 0
  // levelDepth counter set to 1
  // create inner func that takes in arr as arg
    // itterate over each elem in arr
      // if elem is array
        // increment levelDepth and invoke the inner function again, passing the elem(arr) as arg
      // else if NOT array
        // maxLevel gets highest value between maxlevel or levelDepth
  // if maxLevel is greater than 0, return maxLevel, else return 0

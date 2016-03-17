/*
array:
[ 5 ]
target:
4  -1
array:
[ 11, 12, 13, 14, 15 ]
target:
11  0
array:
[ 11, 12, 13, 14, 15 ]
target:
12  1
array:
[ 11, 12, 13, 14, 15 ]
target:
13  2
array:
[ 11, 13, 14, 15, 16, 18, 19, 20 ] => length 9/2   => 4.5  => Math.floor()  => 4
target:
20
*/
// 1  => 15  => index 4  => 17 === 15 ? return index : splitAgain
//
// recurseRight(length-1 - 4) / 2 =>  2.5 Math.floor  =>  2 + 4  => 6 20 ? 17 return index : split again
//
// 6 (length-1 - 6) / 2  1.5 Math.floor = 1 6+1 7 18 ? 20 return index : split again
//
// 7 length -1 - 7 / 2 mathFloor(1) = 7+1 8 return -1
//
// var binarySearch = function(array, target, index) {
//
// }
//
// [ 11, 12, 13, 14, 15, 16 ] 16
/*----------  Algo  ----------*/
// create function called binarySearch, takes in array(sorted ints) and target(int) //
//
function binarySearch(array, target, low, high) {

  high = high || array.length;
  low = low || 0;
  var mid = Math.floor((high - low) / 2) + low;
  var trueIndex = Math.ceil((high - low) / 2) + low;
  console.log('low: ', low, 'high:', high, 'target:', target, 'mid:', mid, 'actual:', array[mid]);

  if (array[mid] === target) {
    return mid;
  }

  if (trueIndex === high || low === high) {
    return -1;
  }

  if (array[mid] > target) {
    return binarySearch(array, target, low, mid);
  } else {
    return binarySearch(array, target, mid, high);
  }
}

// [1,2,3,4,5]
//
// 1 mid = 2, low = 0, high = 5
// 2 mid = 3 , low = 2, high = 5
// 3 mid = 4 , low = 3. high = 5
// 4 mid = 4 , low = 4, high = 5
// 5 mid =   , low = 4,  high = 5











// index = 8 | lastIndex / 2 .. index/2 .. index = 6
// lastIndex = 8 | lasstIndex = 4 - lastIndex = 6 - 2


var x = [];
for (var i = 300; i <= 10000000; i+=3) {
  x.push(i);
}
// var x = [11, 12, 13, 14, 15]
// 1 index = 8 | prev = 0 || 2. index = 12 prev = 4 || 3 index 
// //                                              x           
// var x = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]; > 16
//           0  1  2  3  4  5  6  7  8   9  10  11  12, 13, 14
// 2 +
  console.log(binarySearch(x, 953925))


//calculate middle value which is current index / 2 or 13/
//check if middle value is target /false 13 != 16/
//  return index of that value

// if target is smaller then array[index] && bigger then array[index -1] /false /
// if target is bigger then array[index] && smaller then array[index +1] /false /
//
//check if index is equal to length -1 or index = 0 /false/
// return -1
//
//if target < array[index]  16 < 13
// go left  new binarySearch(array, target, index Math.floor( index / 2))
//else
//go rigth new binaruSearch(array,target, index array.legnth - index - 1) + cirrent index = 4
// return binarySearch(array, target, index)



// looking 9
// (length - index) / 2 + index
// get Math.floor(first length / ) 5
// Math.ceil((9 - 4) / 2) + 4 => 7
// Math.ceil((9 - 6) / 2) + 6 => 9
//
//
//          x
// [1,2,3,4,5,6,7,8,9,10]
//  0 1 2 3 4 5 6 7 8 9
//




/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

// var binarySearch = function (array, target) {
//   /* START SOLUTION */
//   // create function called sub, takes low and high index
//   var sub = function (low, high) {
//     // If we are done, we haven't found the target.
//     if (high === low) { return null; }

//     // Find the middle point.
//     var mid = Math.floor((high - low) / 2) + low;

//     // See if we found the target.
//     if (array[mid] === target) {
//       return mid;

//     // If not, decide which half to recurse on.
//     } else if (array[mid] > target) {
//       return sub(low, mid);
//     } else {
//       return sub(mid, high);
//     }
//   };

//   // Do the recursion.
//   return sub(0, array.length);
//   /* END SOLUTION */
// };


/*

Binary Search Array

*/

// Notes: Cannot use Array.prototype.indexOf
/*----------  Examples  ----------*/
/*
[ 5 ] find(4) // => -1
[1, 2, 3, 4, 5] find(16) // => -1
// get the middle val[3] (odd num elems) 
// if target[16] is smaller than or equal to midvalue[3]
	// search left 
// else search right

[ 11, 12, 13, 14, 15 ] find(15) // => 4

[ 11, 12, 13, 14, 15, 16 ] find(15) // => 4

*/

/*----------  Algo  ----------*/
// create func called binarySearch, takes in (array[sorted ints], target[int], mid, direction) // 
	// get midpoint (is index) [floor((high - low) / 2) + low]

	// if target is value (array[midpoint])
	  // return midpoint(is index)

	// if low is high, return -1;

	// if midpoint value greater than target
	  // go left // 
	  // recurse(array, target, low, mid)
	// else 
	  // go right //
	  // recurse(array, target, mid, high)

// end //

function findIndex(array, target) {
  return binarySearch(array, target, 0, array.length - 1);
};

function binarySearch(array, target, low, high) {
  if (low > high) { return -1; } 

  var mid = Math.floor((low + high) / 2);
  var value = array[mid];

  if (value > target) { return binarySearch(array, target, low, mid-1); }
  if (value < target) { return binarySearch(array, target, mid+1, high); }
  return mid; 
}

console.log(findIndex([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 4));

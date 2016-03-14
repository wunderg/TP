/*
array:
[ 5 ]
target:
4	-1
array:
[ 11, 12, 13, 14, 15 ]
target:
11	0
array:
[ 11, 12, 13, 14, 15 ]
target:
12	1
array:
[ 11, 12, 13, 14, 15 ]
target:
13	2
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
function binarySearch(array, target, index) {
	if (index === undefined) {
		index = Math.floor(array.length / 2);
	}
	if (array[index] === target) {
		return index;
	}

	// check if out of bounds
	if (target < array[index] && target > array[index - 1] || index === 0) {
		return -1;
	}
	if (target > array[index] && target < array[index + 1] || index === array.length - 1) {
		return -1;
	} 

	if (target < array[index]) { 
    console.log(index);
    // move left 
		return binarySearch(array, target, Math.ceil(index / 2));
	} else {
    console.log(index);
    // move right
		return binarySearch(array, target, Math.floor((array.length - index) / 2) + index);
	}
   
}

var x = [];
for(var i = 0; i <= 15; i++) {
 x.push(i);
}
// var x = [11, 12, 13, 14, 15]
// var x = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
//           0  1  2  3  4  5  6  7  8   9  10  11  12, 13, 14

// for(var i = 4; i <= 5; i++) {
console.log(binarySearch(x, 0));
// }


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


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
1  => 15  => index 4  => 17 === 15 ? return index : splitAgain

recurseRight(length-1 - 4) / 2 =>  2.5 Math.floor  =>  2 + 4  => 6 20 ? 17 return index : split again

6 (length-1 - 6) / 2  1.5 Math.floor = 1 6+1 7 18 ? 20 return index : split again

7 length -1 - 7 / 2 mathFloor(1) = 7+1 8 return -1

var binarySearch = function(array, target, index) {
  
}

/*----------  Algo  ----------*/
// create function called binarySearch, takes in array(sorted ints) and target(int) // 
//
//calculate middle value which is current index
//check if middle value is target
//  return index of that value

// if target is smaller then array[index] && bigger then array[index -1]
// if target is bigger then array[index] && smaller then array[index +1]
//check if index is equal to length -1 or index = 0
  // return -1
//
//if target < array[index] 
// go left  new binarySearch(array, target, index Math.floor( index / 2))
//else
//go rigth new binaruSearch(array,target, index Math.floor(((array.length -1) - index) / 2))
// return binarySearch(array, target, index)


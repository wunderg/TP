/*1.Initial step: Input array is split into "sorted" sublists
     [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]

  2.Merge step: Adjacent sublists are merged into sorted sublists
     [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]

  3.Repeat merge step:
     [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

  4.Repeat merge step:
     [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]

  5.Done! Return the sorted array:
     [1,2,3,4,4,7,9]
*/

// loop over each item
	// make every item a sub array -> [[4], [3]]
// compare first item and second item
	// sort and combine first and second into one item -> [[4, 3]]
// repeat the merge step again
	// 
//
//   [1]  [2]
//
//   merge(a, b) {
//     var temp = [1,2,3,4]
//     while(a.length || b.length)
//       if  a[0] > b[0] or
//         temp.push(b.shift())
//     else {
//       temp.push(a.shift())
//     }
//     return temp;
//   }
//
// [1,2,3,4]


// var temp = [];
// for(var i = 0; i < x.length; i+=1) {
//  temp.push([x[i]]);
// }
// var x = [4,5,3,2,3,1,7,8];
// x.map(z => [z]);

//
//while(item.length)
//for( i = 0 i.leng; i+=2) merge(i, i + 1)
     // [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
//

// [,[1,9],[2]].sort

// merge = while(a.length || b.length)
// if (a <= b || b[0] === undefined) push a
// else if( b < a || a[0] === udnefined) push b
// // merge([],[])
// // merge -> 4 3 
// // [3, 4, 4, 7]
// return temp
// #<{(|



  //  [4,7,4,3,9,1,2] -> [ 1,2,3,4,7,9] => return 
  // map.push []
  // if arr.length % 2 !=== arr.push([])
  // // map each of the values to have their own array
  //
  //
  // [[4],[7],[4],[3],[9],[1],[2], [3,4,4,7]] -> [[4,7],[3,4],[1,9],[2]]
  // // loop over the elems(which are arrays)
  //   // have function that takes two arrays as args and returns sorted arr // 
  //     // create empty array to hold sorted values
  //     // loop over args passed in, which are arrs
  //       // (Edge Case: Must account for odd sub arrs like [1, 9] odd -> [2]) // [4,7] -> [3,4]
  //
  //   // each time the function returns, the output is pushed into empty array[[4,7], [3,4]]
  //
  // [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]
  // // loop over the elems(which are arrays)
  // // have function that takes two arrays as args and returns sorted arr // 
  //   // create empty array to hold sorted values
  //   // loop over args passed in, which are arrs
  //     // (Edge Case: Must account for odd sub arrs like [1, 9] odd -> [2])
  //
  //
  // [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]
  //
  // [1,2,3,4,4,7,9]
  // // return final output which is a single sorted arr



//merge function takes two lists - a,b
  //setup temp list
  //create while loop will check lengt of a and length of b !== 0
    //if(a less or equal b  or b is undefined then push a into temp, remove item
    //else push b into temp
//return temp
 



// note: merge sort in place 

// declare function mergesort, takes list of numbers
[3] [8]

function merge(a, b) {
  var temp = [];
  while(a.length || b.length) {
    if (a[0] <= b[0] || b[0] === undefined) {
      temp.push(a.shift());
    } else {
      temp.push(b.shift());
    }
  }
  return temp;
}

function mergeSort(list) {
  list = list.map(x => [x]);

  if (list.length % 2 !== 0) {
    list.push([]);
  }

  while(list.length > 1) {
    list.push(merge(list.shift(), list.shift()));
  }

  return list[0];
}
  // split list into, sub lists of each number -> [1, 2] -> [[1], [2]]
  // if number is NOT even
    // add empty list to end of list of lists
  // create while loop, until length of list is greater than one
    // call merge function, two first args of list
    // add result of merge to end of the list
  // return list


var x = [8,3,6,4,9,1,2,5,7];
console.log(mergeSort(x));

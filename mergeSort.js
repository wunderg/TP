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



// var temp = [];
// for(var i = 0; i < x.length; i+=1) {
//  temp.push([x[i]]);
// }
// var x = [4,5,3,2,3,1,7,8];
// x.map(z => [z]);

//
     // [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
//




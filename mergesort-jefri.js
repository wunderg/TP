/*

  [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]
  // map each of the values to have their own array

  [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
  // loop over the elems(which are arrays)
    // have function that takes two arrays as args and returns sorted arr // 
      // create empty array to hold sorted values
      // loop over args passed in, which are arrs
        // (Edge Case: Must account for odd sub arrs like [1, 9] odd -> [2])

    // each time the function returns, the output is concated to empty array(reduce would be nice for that)

  [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]
  // loop over the elems(which are arrays)
  // have function that takes two arrays as args and returns sorted arr // 
    // create empty array to hold sorted values
    // loop over args passed in, which are arrs
      // (Edge Case: Must account for odd sub arrs like [1, 9] odd -> [2])


  [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]

  [1,2,3,4,4,7,9]
  // return final output which is a single sorted arr

*/


/*----------  Code  ----------*/
function merge(a, b) {
  var temp = [];
  while (a.length || b.length) {
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

  while (list.length > 1) {
    list.push(merge(list.shift(), list.shift()));
  }

  return list[0];
}

var x = [8, 3, 6, 4, 9, 1, 2, 5, 7];
console.log(mergeSort(x));

function mergeSort(list) {
  if (list.length < 2) {
    return list
  }

  var result = []

  var middle = Math.floor(list.length / 2)
  var left = mergeSort(list.slice(0, middle))
  var right = mergeSort(list.slice(middle))

  var x = 0;
  var y = 0;

  while (left[y] || right[x]) {
    if (left[y] > right[x] || left[y] === undefined) {
      result.push(right[x++])
    } else {
      result.push(left[y++])
    }
  }

  return result
}


module.exports = mergeSort;

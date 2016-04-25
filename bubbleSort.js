function bubbleSort(array) {
  //create a flag is values are swapped start with false
  var flag = false
  //create num1 index = 0
  var index = 0
  var counter = 0;

  while(true) {
    if (index === array.length - 1 && flag === false) {
      return array
    }

    if (index === array.length - 1 && flag === true) {
      index = 0
      flag = false
    }

    if (array[index] > array[index + 1]) {
      var temp = array[index]
      array[index] = array[index + 1]
      array[index + 1] = temp
      flag = true
    }

    index += 1
  }
}

  //setup while loop while true
  //if index is equal to length and flag is false
  //then return
  //
  // if index is equal to lentgh and flag is true
  // set index to 0, and flag to false;
  //
  //if num1 > num2
  	//swap those numbers
  	//set flat to true

  //increase index by one

module.exports = bubbleSort;

//flag is false, true, false, true, false
// [1, 2, 3]
// 2 > 3 false
// 3 > 1 true 
// 2 > 1 true
// 2 > 3 false
// 1 

// var input = [2,3,1];
// var expected = [-10, -10, 2, 4, 20, 299];

// create a flag is true

// while flag
	// if num1 is greater than num2 
		// swap
	// if index is the last item 
		// flag is false

// -10, 20, -10, 2, 4, 299

// 20 > -10 => true
	// swap(20, -10)

// -10, 2 => false	
	// 


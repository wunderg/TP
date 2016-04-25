function BinaryHeap() {

  this._heap = [];
}

BinaryHeap.prototype.getRoot = function() {
  return this._heap[0];
}

BinaryHeap.prototype.insert = function(value) {
	// push value into heap and create childIndex
	var childIndex = this._heap.push(value) - 1;
	// create parentIndex from childIndex
	var parentIndex = this.getParentIndex(childIndex);
	// while parentValue > childValue
  while( this._heap[parentIndex] > this._heap[childIndex]) {
		// swap chilValue and parentValue
		this.swap(parentIndex, childIndex);
		// childIndex gets parentIndex
		childIndex = parentIndex;
		// calculate new parentIndex from childIndex
		parentIndex = this.getParentIndex(childIndex);
	}
}

BinaryHeap.prototype.removeRoot = function() {
	// remove the first item in the tree
  var firstValue = this.getRoot();
  // the last item becomes first elemement
  this._heap[0] = this._heap.pop();
  // create parent index
  var parentIndex = 0;
  // create child index from that parent
  var childIndex = this.getSmallestChild(parentIndex);
  // create  while loop parent value greater then child
  while(this._heap[parentIndex] > this._heap[childIndex]) {
  // swap parent and child value
    this.swap(parentIndex, childIndex);
  // ParentIndex becomes childIndex
    parentIndex = childIndex;
  // ChildIndex = from parentIndex
    childIndex = this.getSmallestChild(parentIndex);
  }

  return firstValue;
}

BinaryHeap.prototype.swap = function(parentIndex, childIndex) {
	var temp = this._heap[parentIndex];
	this._heap[parentIndex] = this._heap[childIndex];
	this._heap[childIndex] = temp;
}

BinaryHeap.prototype.getParentIndex = function(childIndex) {
  return Math.floor((childIndex - 1) / 2);
}

BinaryHeap.prototype.getSmallestChild = function(parentIndex) {

  var index1 = parentIndex * 2 + 1;
  var index2 =  parentIndex * 2 + 2;

  if (this._heap[index1] < this._heap[index2]) {
     return index1;
  } else {
    return index2;
  }
}

module.exports = BinaryHeap;

/*
parentIndex = Math.floor( (index - 1) / 2 )
childrenIndices = [index * 2 + 1, index * 2 + 2]
*/

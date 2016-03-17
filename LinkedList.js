//NODE value inside list
var Node = function(val) {
  this.val = val;
  this.next = null;
}
//function takes a value
//set value to value
//set next to null

//LINKED LIST
var LinkedList = function(val) {
  this.head = new Node(val);
  this.tail = this.head
}
//functions takes a value
//set head to the node with a value
//set tail to the head
// var list = linkedList(5)  =>  {head: Node, tail : New N ->}  Node: {value: 5, next: Node{value: 5, next: null}}
LinkedList.prototype.addtoTail = function(val) {
  this.tail.next = new Node(val);
  this.tail = this.tail.next;
}

// add to tail
// function takes a value
// tail.next = tail;
// tail = create a new node with a value

LinkedList.prototype.removeHead = function() {
  var currHead = this.head.val;
  this.head = this.head.next;
  return currHead;
}

LinkedList.prototype.contains = function(target, node) {
  node = node || this.head;

  if (node.val === target) {
    return true;
  }
  if (node.next) {
    return this.contains(target, node.next);
  }

  return false;
}

// remove head
// save the current head
//point head to head.next
//
//return the current head

//contains
// takes a value and node
//if node.next equals undefined return false;
//if node is not defined that node equal head
// check if value equals head.value
  //if true return true
//else call return contains with value , node.next
//

var linkedList = new LinkedList(5);
linkedList.addtoTail(4);
linkedList.addtoTail(3);

console.log(linkedList);

//
// linkedlist.addtoTail(5);
// linkedLIst.removeHead() => head
// linkedList.contains(5) => true or false
//
// var linkedList = {head: Node, tail: Node}
// Node = {value: 4, next: Node}
//


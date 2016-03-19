var Queue = function() {
    var storage = [];

    this.enqueue = function(item) {
        storage.push(item);
    };

    this.dequeue = function() {
        return storage.shift();
    };

}

var Tree = function(value) {
    this.value = value;
    this.children = [];
};

Tree.prototype.BFSelect = function(filter) {
  var queue = new Queue();

  // declare result list
  var result = [];
  // create depth variable
  // create inner function, inputs (tree, depth)
  function inner(tree) {
    if(tree && tree.item) {
      var depth = tree.depth;
      var tree = tree.item;
    }

    if (tree && filter(tree.value, depth)) {
      result.push(tree.value)
    }
    if (tree && tree.children.length) {
      tree.children.forEach(child => queue.enqueue({item: child, depth: depth + 1}));
    }
    if (tree) {
      inner(queue.dequeue());
    }
  }
  inner({item: this, depth: 0});
  return result;

};


//
//    var nodeDepths = [], deepNodes = [];
//     var root = new Tree(0);
//     // depth: 0
//     nodeDepths.push([0]);
//     // depth: 1
//     deepNodes = [];
//     deepNodes.push(1); root.addChild(1);
//     deepNodes.push(2); root.addChild(2);
//     nodeDepths.push(deepNodes);
//     // depth: 2
//     deepNodes = [];
//     deepNodes.push(3); root.children[0].addChild(3);
//     deepNodes.push(4); root.children[0].addChild(4);
//     deepNodes.push(5); root.children[1].addChild(5);
//     deepNodes.push(6); root.children[1].addChild(6);
//     nodeDepths.push(deepNodes);
//     // depth: 3 (sparse)
//     deepNodes = [];
//     deepNodes.push(3); root.children[0].children[0].addChild(3);
//     deepNodes.push(4); root.children[0].children[0].addChild(4);
//     deepNodes.push(5); root.children[1].children[0].addChild(5);
//     deepNodes.push(6); root.children[1].children[0].addChild(6);
//     nodeDepths.push(deepNodes);
//     // this filter constructor produces a filter for the specified depth
//     var depthFilter = function (filterDepth) {
//       return function (node, nodeDepth) {
//         return filterDepth === nodeDepth;
//       };
//     };
//
//     shouldBeDeepEqualSorted(root.BFSelect(depthFilter(0)), nodeDepths[0]);
/**
 * You shouldn't need to change anything below here, but feel free to look.
 */



/**
 * add an immediate child
 * (wrap values in Tree nodes if they're not already)
 */
Tree.prototype.addChild = function(child) {
    if (!child || !(child instanceof Tree)) {
        child = new Tree(child);
    }
    if (!this.isDescendant(child)) {
        this.children.push(child);
    } else {
        throw new Error('That child is already a child of this tree');
    }
    // return the new child node for convenience
    return child;
};

/**
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
 */
Tree.prototype.isDescendant = function(child) {
    if (this.children.indexOf(child) !== -1) {
        // `child` is an immediate child of this tree
        return true;
    } else {
        for (var i = 0; i < this.children.length; i++) {
            if (this.children[i].isDescendant(child)) {
                // `child` is descendant of this tree
                return true;
            }
        }
        return false;
    }
};

/**
 * remove an immediate child
 */
Tree.prototype.removeChild = function(child) {
    var index = this.children.indexOf(child);
    if (index !== -1) {
        // remove the child
        this.children.splice(index, 1);
    } else {
        throw new Error('That node is not an immediate child of this tree');
    }
};

/*depth = 0
depth = 1
depth = 3

level = 0;
counter = 2


                    {1} // 0
                     |
                {2}     {3} // 1
                 |       |
              {4} {5} {6} {7} // 2
               |           |
              {8}         {9} // 3
*/


var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = leaf4.addChild(6);
var leaf8 = leaf4.addChild(7);
var leaf9 = leaf5.addChild(8);
var leaf10 = leaf9.addChild(9);
root1.children[0].children[0].children[0].addChild(3);
root1.children[0].children[0].children[1].addChild(5);
root1.children[0].children[0].children[1].addChild(2);
root1.children[0].children[0].children[1].addChild(2);
// console.log(root1);
var z = root1.BFSelect(function(value, depth) {
    return value % 2;
})

console.log(z);


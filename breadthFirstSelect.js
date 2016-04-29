var Queue = function() {
    var storage = [];

    this.enqueue = function(item) {
        storage.push(item);
    };

    this.dequeue = function() {
        return storage.shift();
    };

    this.size = function() {
        return storage.length;
    }

}

var Tree = function(value) {
    this.value = value;
    this.children = [];
};

Tree.prototype.BFSelect = function(filter) {
    var queue = new Queue();
    var result = [];
    this.depth = 0;

    function inner(node) {
        if (filter(node.value, node.depth)) {
            result.push(node.value);
        }

        if (node.children) {
            node.children.forEach(item => {
                item.depth = node.depth + 1;
                queue.enqueue(item)
            });
        }

        if (queue.size()) {
            inner(queue.dequeue());
        }
    }

    inner(this);

    return result;
};



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

module.exports = Tree;



function fib(num) {
  if (num < 1) {
    return 1
  }
  return fib(num -1) + fib(num - 2);
}

10
function fib2(num) {
  if (num < 1) {
    return 1;
  }
  //create temp var
  //create curr varibale = 1
  //create prev varibale = 0
  //iterate till i = num
  //use temp to hold curr
  //curr will be result of prev and curr
  //prev will equal to prev currrent
  //
  //return current
}

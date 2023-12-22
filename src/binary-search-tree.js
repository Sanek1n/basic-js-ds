const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.tree = null;
  }

  root() {
    if (this.tree === null) {
      return null;
    } else {
      return this.tree;
    }
  }

  add(data) {
    if (this.tree === null) {
      this.tree = new Node(data);
    } else {
      let branch = this.tree;
      let prevBranch = null;
      while (branch !== null) {
        if (data > branch.data) {
          prevBranch = branch;
          branch = branch.right;
        } else if (data < branch.data) {
          prevBranch = branch;
          branch = branch.left;
        }
      }
      if (data > prevBranch.data) {
        prevBranch.right = new Node(data);
      } else {
        prevBranch.left = new Node(data);
      }
    }
  }

  has(data) {
    let branch = this.tree;
      while (branch !== null) {
        if (branch.data === data) return true;
        if (data > branch.data) {
          branch = branch.right;
        } else if (data < branch.data) {
          branch = branch.left;
        }
      }
    return false;
  }

  find(data) {
    let branch = this.tree;
    while (branch !== null) {
      if (branch.data === data) return branch;
      if (data > branch.data) {
        branch = branch.right;
      } else if (data < branch.data) {
        branch = branch.left;
      }
    }
    return null;
  }

  remove(data) {
    this.tree = deleteNode(this.tree, data);

    function deleteNode(obj, data) {
      if (obj === null) {
        return null;
      }
      if (data > obj.data) {
        obj.right = deleteNode(obj.right, data);
        return obj;
      } else if (data < obj.data) {
        obj.left = deleteNode(obj.left, data);
        return obj;
      } else if (data === obj.data) {
        if (obj.left === null && obj.right === null) {
          return null
        } else if (obj.left === null) {
          obj = obj.right;
          return obj;
        } else if (obj.right === null) {
          obj = obj.left;
          return obj;
        } else {
          let minRight = obj.right;
          while (minRight.left) {
            minRight = minRight.left;
          }
          obj.data = minRight.data;
          obj.right = deleteNode(obj.right, minRight.data);
          return obj;
        }
      }
    }
  }

  min() {
    let min = null;
    if (this.tree === null) {
      return min;
    } else {
      min = this.tree.data;
    }
    let branch = this.tree.left;
    while (branch !== null) {
      if (branch.data < min) min = branch.data;
      branch = branch.left;
    }
    return min;
  }

  max() {
    let max = null;
    if (this.tree === null) {
      return max;
    } else {
      max = this.tree.data;
    }
    let branch = this.tree.right;
    while (branch !== null) {
      if (branch.data > max) max = branch.data;
      branch = branch.right;
    }
    return max;
  }
}

module.exports = {
  BinarySearchTree
};
/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) {
      return 0;
    }
    const solver = (node) => {
      if (node.left === null && node.right === null) {
        return 1;
      }
      if (node.left === null) {
        return solver(node.right) + 1;
      }
      if (node.right === null) {
        return solver(node.left) + 1;
      }
      return Math.min(solver(node.left), solver(node.right)) + 1;
    };
    return solver(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) {
      return 0;
    }

    const solver = (node) => {
      if (node.left === null && node.right === null) {
        return 1;
      }
      if (node.left === null) {
        return solver(node.right) + 1;
      }
      if (node.right === null) {
        return solver(node.left) + 1;
      }
      return Math.max(solver(node.left), solver(node.right)) + 1;
    };
    return solver(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let total = 0;

    const solver = (node) => {
      if (node === null) {
        return 0;
      }
      const left = solver(node.left);
      const right = solver(node.right);
      total = Math.max(total, node.val + left + right);
      return Math.max(0, left + node.val, right + node.val);
    };

    solver(this.root);
    return total;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) {
      return null;
    }

    let count = [this.root];
    let closest = null;

    while (count.length) {
      const node = count.shift();
      const val = node.val;
      const HigherBound = val > lowerBound;
      const closestUpdate = val < closest || closest === null;

      if (HigherBound && closestUpdate) {
        closest = val;
      }

      if (val.left) {
        count.push(val.left);
      }
      if (val.right) {
        count.push(val.right);
      }
    }

    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };

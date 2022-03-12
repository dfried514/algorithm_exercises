function minHeightBst(array) {
  const buildTree = array => {
		if (array.length == 0) return null;
		const rootIdx = Math.floor((array.length - 1) / 2);
		const tree = new BST(array[rootIdx]);
		
		if (array.length == 1) return tree;
		tree.left = buildTree(array.slice(0, rootIdx));
		tree.right = buildTree(array.slice(rootIdx + 1));
		return tree;
	}
	return buildTree(array);
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}


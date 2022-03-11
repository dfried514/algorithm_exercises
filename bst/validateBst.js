class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  let res = true;

	const traverse = (tree, min, max) => {
		if (tree === null) return;
		if (tree.value > max || tree.value < min) res = false;
		
		traverse(tree.left, Math.min(min, tree.value - 1), tree.value - 1);
		traverse(tree.right, tree.value, max);	
	}
	traverse(tree, -Infinity, Infinity);
	return res;
}

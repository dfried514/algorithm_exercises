// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
 	const items = [];
	
	const backwards = tree => {
		if (tree == null || items.length >= k) return;
		
		backwards(tree.right);
		items.push(tree.value);
		backwards(tree.left);
	}
	backwards(tree);
	return items[k - 1];
}

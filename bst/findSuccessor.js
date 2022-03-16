// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  if (node.right) {
		let ptr = node.right;
		while (ptr.left) {
			ptr = ptr.left;
		}
		return ptr;
	}
	if (node.parent && node.parent.left == node) return node.parent;
	
	let ptr = node;
	while (ptr.parent && ptr.parent.right == ptr) {
		ptr = ptr.parent;
	}
	return ptr.parent;
}


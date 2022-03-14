function invertBinaryTree(tree) {
  const invert = (p1, p2) => {
		const tmp = p1.value;
		p1.value = p2.value;
		p2.value = tmp;
		
		if (p1.left && p2.right) {
			invert(p1.left, p2.right);
		}
		else if (p1.left) {
			p2.right = new BST(null);
			invert(p1.left, p2.right);
			p1.left = null;
		} else if (p2.right) {
			p1.left = new BST(null);
			invert(p1.left, p2.right);
			p2.right = null;
		}
		if (p1.right && p2.left) 
			invert(p1.right, p2.left);
		else if (p1.right) {
			p2.left = new BST(null);
			invert(p1.right, p2.left);
			p1.right = null;
		} else if (p2.left) {
			p1.right = new BST(null);
			invert(p1.right, p2.left);
			p2.left = null;
		}
	}
	if (tree.left && tree.right) 
		invert(tree.left, tree.right);
	else if (tree.left) {
		tree.right = new BST(null);
		invert(tree.left, tree.right);
		tree.left = null;
	} else if (tree.right) {
		tree.left = new BST(null);
		invert(tree.left, tree.right);
		tree.right = null;
	}
	return tree;
}

// This is the class of the input binary tree.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

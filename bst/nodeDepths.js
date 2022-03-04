/* 
dfs application
*/
function nodeDepths(root) {
  let depths = 0;
	const dfs = (root, depth = 0) => {
		if (!root) return;
		depths += depth;
		dfs(root.left, depth + 1);
		dfs(root.right, depth + 1);
	}
	dfs(root);
	return depths;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*
Classic dfs application
*/

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	if (!root) return [];
  const res = [];
	const dfs = (root, sum) => {
		if (!root.left && !root.right) {
			res.push(sum + root.value);
			return;
		}
		if (root.left) dfs(root.left, sum + root.value);
		if (root.right) dfs(root.right, sum + root.value);
	}
	dfs(root, 0);
	return res;
}


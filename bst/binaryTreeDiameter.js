// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  let maxDiameter = 0;
	
	const dfs = tree => {
		if (!tree) return 0;
		const left = dfs(tree.left);
		const right = dfs(tree.right);
		let diameter = dfs(tree.left) + dfs(tree.right);
		
		maxDiameter = Math.max(maxDiameter, diameter);
		return Math.max(left, right) + 1;
	}
	dfs(tree);
	return maxDiameter;
}

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  let balanced = true;
	
	const dfs = tree => {
		if (!tree) return 0;
		const left = dfs(tree.left);
		const right = dfs(tree.right);
		
		balanced = balanced && Math.abs(left - right) <= 1;
		return Math.max(left, right) + 1;
	}
	dfs(tree);
	return balanced;
}

function maxPathSum(tree) {
	let maxSum = -Infinity;
	const rec = node => {
		if (!node) return 0;
		let leftSum = rec(node.left);
		let rightSum = rec(node.right);
		let curSum = node.value + Math.max(leftSum, rightSum);
		maxSum = Math.max(maxSum, curSum, node.value + leftSum + rightSum);
		return curSum;
	}
	rec(tree);
	return maxSum;
}

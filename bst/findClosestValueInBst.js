/*
traverse BST, compare differences of target with current and closest values,
update closest value accordingly
*/
function findClosestValueInBst(tree, target) {
  let closestValue = tree.value;
	let root = tree;
	
	while (root) {
		if (root.value == target) return target;
		closestValue 
				= Math.abs(target - root.value) < Math.abs(target - closestValue)
			? root.value
			: closestValue;
		if (root.value < target) root = root.right;
		else root = root.left;
	}
	return closestValue;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  	const isAncestor = (node, target) => {
		if (!node) return false;
		if (node === target) return true;
		return target.value < node.value 
			? isAncestor(node.left, target) 
			: isAncestor(node.right, target); 
	}
	return (isAncestor(nodeOne, nodeTwo) && isAncestor(nodeTwo, nodeThree))
					|| (isAncestor(nodeThree, nodeTwo) && isAncestor(nodeTwo, nodeOne));	
}

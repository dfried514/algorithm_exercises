function inOrderTraverse(tree, array) {
  const inorder = tree => {
		if (!tree) return;
		
		inorder(tree.left);
		array.push(tree.value);
		inorder(tree.right);
	}
	inorder(tree);
	return array;
}

function preOrderTraverse(tree, array) {
	const preorder = tree => {
		if (!tree) return;
	
		array.push(tree.value);
		preorder(tree.left);
		preorder(tree.right);
	}
	preorder(tree);
	return array;
}

function postOrderTraverse(tree, array) {
  const postorder = tree => {
		if (!tree) return;
		
		postorder(tree.left);
		postorder(tree.right);
		array.push(tree.value);
	}
	postorder(tree);
	return array;
}

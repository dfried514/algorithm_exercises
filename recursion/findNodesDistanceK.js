class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findNodesDistanceK(tree, target, k) {
	if (k == 0) return [target];
	let pathStack;
	let targetNode;
	const res = [];
  	const getNodes = (node, cnt) => {
		if (!node) return;
		if (cnt == k) {
			res.push(node.value);
			return;
		}
		getNodes(node.left, cnt + 1);
		getNodes(node.right, cnt + 1);
	}
	const getPath = (node, stack) => {
		if (!node) return;
		if (node.value == target) {
			pathStack = stack;
			targetNode = node;
			return;
		}
		getPath(node.left, [...stack, node]);
		getPath(node.right, [...stack, node]);
	}
  	getPath(tree, []);
	let child = targetNode;
	let parent = pathStack.pop();
	let cnt = 1;
	while (parent) {
		if (cnt == k) {
			res.push(parent.value);
			break;
		}
		if (parent.left === child)
			getNodes(parent.right, cnt + 1);
		else
			getNodes(parent.left, cnt + 1);
		cnt++;
		child = parent;
		parent = pathStack.pop();
	}
	getNodes(targetNode.left, 1);
	getNodes(targetNode.right, 1);
	return res;
}

// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(values) {
  const preorder = (start, end) => {
		if (start == end) return null;
		const bst = new BST(values[start]);
		let firstLargest = values.findIndex(
			(elem, i) => elem >= values[start] && i > start && i < end);
		if (firstLargest == -1) firstLargest = end;
		bst.left = preorder(start + 1, firstLargest);
		bst.right = preorder(firstLargest, end);
		return bst;
	}
	return preorder(0, values.length);
}


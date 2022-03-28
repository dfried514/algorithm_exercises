// O(n) time | O(n) space
// recursive solution
function removeKthNodeFromEnd(head, k) {
  const rec = node => {
		if (!node) return 0;
		let cnt = 1 + rec(node.next);
		if (cnt == k + 1) 
			node.next = node.next.next;
		else if (cnt == k && node == head) {
			node.value = node.next.value;
			node.next = node.next.next;
		}
		return cnt;
	}
	rec(head);
}


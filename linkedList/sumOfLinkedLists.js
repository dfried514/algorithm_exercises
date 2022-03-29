class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let p1 = linkedListOne;
	let p2 = linkedListTwo;
	let resHead, resPtr;
	let carry = 0, curSum, curDigit, p1Val, p2Val;
	while (p1 || p2 || carry) {
		p1Val = p1 ? p1.value : 0;
		p2Val = p2 ? p2.value : 0;
		curSum = p1Val + p2Val + carry;
		curDigit = curSum % 10;
		carry = Math.floor(curSum / 10);
		if (resHead) {
			resPtr.next = new LinkedList(curDigit);
			resPtr = resPtr.next;
		} else {
			resHead = new LinkedList(curDigit);
			resPtr = resHead;
		}
		p1 = p1 ? p1.next : null;
		p2 = p2 ? p2.next : null;
	}
	return resHead;
}


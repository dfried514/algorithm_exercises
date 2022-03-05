// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// iteration with two pointers over a linked list, 
// skipping over duplicates
function removeDuplicatesFromLinkedList(linkedList) {
  let ptr = linkedList;
	let nextPtr;
	while (ptr) {
		nextPtr = ptr.next;
		while (nextPtr && nextPtr.value == ptr.value) {
			nextPtr = nextPtr.next;
		}
		ptr.next = nextPtr;
		ptr = ptr.next;
	}
  return linkedList;
}


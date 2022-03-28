// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head)
			this.insertBefore(this.head, node);
		else {
			this.head = node;
			this.tail = node;
		}
  }

  setTail(node) {
		if (this.tail)
			this.insertAfter(this.tail, node);
		else 
			this.setHead(node);
  }

  insertBefore(node, nodeToInsert) {
		if (!node || !nodeToInsert || node === nodeToInsert) return;
		this.remove(nodeToInsert);
		if (node.prev) 
			node.prev.next = nodeToInsert;
		nodeToInsert.prev = node.prev;
		nodeToInsert.next = node;
		node.prev = nodeToInsert;
		if (this.head == node)
			this.head = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
		if (!node || !nodeToInsert || node === nodeToInsert) return;
		this.remove(nodeToInsert);
		if (node.next)
			node.next.prev = nodeToInsert;
		nodeToInsert.next = node.next;
		nodeToInsert.prev = node;
		node.next = nodeToInsert;
		if (this.tail == node)
			this.tail = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
		if (position == 1) {
			this.setHead(nodeToInsert);
			return;
		}
		let ptr = this.head;
		for (let i = 1; i < position; i++) {
			ptr = ptr.next;
		}
		if (!ptr) {
			this.setTail(nodeToInsert);
			return;
		}
		this.insertBefore(ptr, nodeToInsert);
  }

  removeNodesWithValue(value) {
		let ptr = this.head;
		while (ptr) {
			if (ptr.value == value) {
				const tmp = ptr.next;
				this.remove(ptr)
				ptr = tmp;
			} else
				ptr = ptr.next;
		}
  }

  remove(node) {
		if (node.prev) node.prev.next = node.next;
		if (this.tail == node) this.tail = this.tail.prev;
		
		if (node.next) node.next.prev = node.prev;
		if (this.head == node) this.head = node.next;
	
		node.prev = null;
		node.next = null;
  }

  containsNodeWithValue(value) {
		let ptr = this.head;
		while (ptr) {
			if (ptr.value == value) return true;
			ptr = ptr.next;
		}
		return false;
  }
}

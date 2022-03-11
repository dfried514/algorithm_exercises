class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let ptr = this;
		
		while (true) {
			if (value >= ptr.value) {
				if (ptr.right)
					ptr = ptr.right;
				else {
					ptr.right = new BST(value);
					break;
				}
			} else {
				if (ptr.left)
					ptr = ptr.left;
				else {
					ptr.left = new BST(value);
					break;
				} 
			}
		}
    return this;
  }

  contains(value) {
    let ptr = this;
		
		while (ptr) {
			if (ptr.value == value) return true;
			if (value > ptr.value) ptr = ptr.right;
			else ptr = ptr.left;
		}
		return false;
  }

  remove(value) {
		let ptr = this, parent, next;
		// assign ptr to value node, and get its parent
		while (ptr && ptr.value !== value) {
			parent = ptr;
			
			if (value > ptr.value) ptr = ptr.right;
			else ptr = ptr.left;
		}
		if (!ptr) return this;
		// if right branch, replace value node with its successor,
		// and remove successor, using its parent
		if (ptr.right) {
			if (ptr.right.left) {
				parent = ptr.right;
				next = ptr.right.left;
				
				while (next.left) {
					parent = next;
					next = next.left;
				}
				ptr.value = next.value;
				parent.left = next.right;
			} else {
				ptr.value = ptr.right.value;
				ptr.right = ptr.right.right;
			}
			// if only left, and if parent, assign parent branch to
			// largest value on left side
			// if no parent, replace root node with largest left value
			// remove largest left value, using its parent
		} else if (ptr.left) {
			if (parent) {
				if (parent.value > ptr.value) 
					parent.left = ptr.left;
				else 
					parent.right = ptr.left;
			} else {
				if (ptr.left.right) {
					parent = ptr.left;
					next = ptr.left.right;
					
					while (next.right) {
						parent = next;
						next = next.right;
					}
					ptr.value = next.value;
					parent.left = next.left;
				} else {
					ptr.value = ptr.left.value;
					ptr.left = ptr.left.left;
				}
			}
		} else {
			// no children, if parent, assign branch to null
			// no parent, its just the root, assign it to null
			if (parent) {
				if (parent.value > ptr.value) 
					parent.left = null;
				else 
					parent.right = null;
			} else return null;
		}
		return this;
	}
}

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
		for (let i = Math.floor((array.length - 1) / 2); i >= 0; i--) {
			this.siftDown(i, array);
		}
		return array;
  }

  siftDown(idx, heap) {
    let left = (2 * idx) + 1;
		let right = (2 * idx) + 2;
		let smallest = (heap[left] && heap[left] < heap[idx]) 
			? left
			: idx;
		smallest = (heap[right] && heap[right] < heap[smallest])
			? right
			: smallest;
		if (smallest !== idx) {
			[heap[idx], heap[smallest]] 
				= [heap[smallest], heap[idx]];
			this.siftDown(smallest, heap);
		}
  }

  siftUp(idx, heap) {
		let parent = Math.floor((idx - 1) / 2);
  	while (idx > 0 && heap[idx] < heap[parent]) {
			[heap[idx], heap[parent]] 
				= [heap[parent], heap[idx]];
			idx = parent;
			parent = Math.floor((idx - 1) / 2);
		}
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    const min = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.siftDown(0, this.heap);
		return min;
  }

  insert(value) {
    this.heap.push(value);
		this.siftUp(this.heap.length - 1, this.heap);
  }
}


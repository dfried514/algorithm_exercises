function nextGreaterElement(array) {
	const res = [], stack = [];
  	let idx = 0;
	while (idx < array.length) {
		stack.push(idx++);
		if (idx == array.length) break;
		while (stack.length && array[idx] > array[stack[stack.length - 1]]) {
			res[stack.pop()] = array[idx];			
		}
	}
	idx = 0;
	while (idx < array.length -1 && stack.length) {
		while (stack.length && array[idx] > array[stack[stack.length - 1]]) {
			res[stack.pop()] = array[idx];
		}
		idx++;
	}
	while (stack.length) {
		res[stack.pop()] = -1;
	}
  return res;
}


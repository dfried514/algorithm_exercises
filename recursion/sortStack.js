function sortStack(stack) {
	const insert = (val, stack) => {
  		if (!stack.length || val >= stack[stack.length - 1]) {
    			stack.push(val);
    			return stack;
  		}
  		const curElem = stack.pop();
  		const curStack = insert(val, stack);
  		curStack.push(curElem);
  		return curStack;
	}
	const rec = stack => {
  		if (!stack.length) return stack;
  		return insert(stack.pop(), rec(stack));
	}
	return rec(stack);
}


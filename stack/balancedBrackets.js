function balancedBrackets(string) {
	const bracketsStack = [];
  const leftBrackets = {
		'{': '}',
		'[': ']',
		'(': ')'
	};
	const rightBrackets = {
		'}': '{',
		']': '[',
		')': '('
	};
	for (let i = 0; i < string.length; i++) {
		const curChar = string.charAt(i);
		if (leftBrackets[curChar]) 
			bracketsStack.push(curChar);
		if (rightBrackets[curChar]
				&& leftBrackets[bracketsStack.pop()] !== curChar)
				return false;
	}
	return bracketsStack.length == 0;
}


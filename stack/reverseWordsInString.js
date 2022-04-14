function reverseWordsInString(string) {
  	let res = '', ptr = 0;
	const stack = [];
	while (ptr < string.length) {
		let curWord = '';
		while (ptr < string.length && string.charAt(ptr) !== ' ') {
			curWord += string.charAt(ptr++);
		}
		if (curWord.length) stack.push(curWord);
		let curBlank = '';
		while (ptr < string.length && string.charAt(ptr) == ' ') {
			curBlank += string.charAt(ptr++);
		}
		if (curBlank.length) stack.push(curBlank);
	}
	while (stack.length) {
		res += stack.pop();
	}
	return res;
}

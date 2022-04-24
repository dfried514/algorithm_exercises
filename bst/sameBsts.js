function sameBsts(arrayOne, arrayTwo) {
  	const rec = (min, max, node1, node2) => {
		if (node1 == -1 && node2 == -1) return true;
		if (arrayOne[node1] !== arrayTwo[node2]) return false;
		const curValue = arrayOne[node1];
		const left1 = arrayOne.findIndex(
			(x, i) => x < curValue && x >= min && i > node1);
		const left2 = arrayTwo.findIndex(
			(x, i) => x < curValue && x >= min && i > node2);
		const right1 = arrayOne.findIndex(
			(x, i) => x >= curValue && x < max && i > node1);
		const right2 = arrayTwo.findIndex(
			(x, i) => x >= curValue && x < max && i > node2);
		return rec(min, curValue, left1, left2) 
			&& rec(curValue, max, right1, right2);
	}
	return rec(-Infinity, Infinity, 0, 0);
}

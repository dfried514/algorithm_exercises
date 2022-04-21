function subarraySort(array) {
	let smallestOutOfOrder = Infinity;
	let biggestOutOfOrder = -Infinity;
	let smallOutOfOrderIdx;
	let idx = 0;
  	const isOutOfOrder = idx => {
		if (idx == 0 && array[idx] > array[idx + 1]) return true;
		if (idx == array.length - 1 && array[idx] < array[idx - 1]) return true;
		return array[idx] < array[idx - 1] || array[idx] > array[idx + 1];
	}
	array.forEach((x, i) => {
		if (isOutOfOrder(i)) {
			smallestOutOfOrder = Math.min(smallestOutOfOrder, x);
			biggestOutOfOrder = Math.max(biggestOutOfOrder, x);
		}
	});
	if (smallestOutOfOrder == Infinity) return [-1, -1];
	while (idx < array.length && array[idx] <= smallestOutOfOrder) {
		idx++;
	}
	smallOutOfOrderIdx = idx;
	idx = array.length - 1;
	while (idx >= 0 && array[idx] > biggestOutOfOrder) {
		idx--;
	}
	return [smallOutOfOrderIdx, idx];
}


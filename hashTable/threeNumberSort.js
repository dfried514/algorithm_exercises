function threeNumberSort(array, order) {
  const cnts = {};
	for (x of array) {
		cnts[x] = cnts[x] + 1 || 1;
	}
	let orderIdx = 0;
	for (let i = 0; i < array.length; i++) {
		while (!cnts[order[orderIdx]]) {
			orderIdx++;
		}
		array[i] = order[orderIdx];
		cnts[order[orderIdx]]--;
	}
	return array;
}


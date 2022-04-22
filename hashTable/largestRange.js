function largestRange(array) {
	let maxRange = [array[0], array[0]];
	const hash = {};
  	array.forEach(x => hash[x] = true);
	for (const x of array) {
		if (hash[x]) {
			hash[x] = false;
			let startRange = x - 1, endRange = x + 1;
			while (hash[startRange]) {
				hash[startRange--] = false;
			}
			while (hash[endRange]) {
				hash[endRange++] = false;
			}
			if (maxRange[1] - maxRange[0] < endRange - startRange - 2)
				maxRange = [startRange + 1, endRange - 1];
		}
	}
	return maxRange;
}


function maxSumIncreasingSubsequence(array) {
	let maxSumIndex = 0;
	const msis = array.map(x => [x, [x]]);
	for (let i = 1; i < array.length; i++) {
		for (let j = 0; j < i; j++) {
			if (array[i] > array[j] && msis[i][0] < msis[j][0] + array[i]) {
				msis[i] = [msis[j][0] + array[i], [...msis[j][1], array[i]]];
			}
		}
		if (msis[i][0] > msis[maxSumIndex][0])
			maxSumIndex = i;
	}
	return msis[maxSumIndex];
}

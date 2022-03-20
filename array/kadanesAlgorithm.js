function kadanesAlgorithm(array) {
  let sum = maxSum = array[0];
	for (let i = 1; i < array.length; i++) {
		sum += array[i];
		sum = Math.max(sum, array[i]);
		maxSum = Math.max(maxSum, sum);
	}
	return maxSum;
}

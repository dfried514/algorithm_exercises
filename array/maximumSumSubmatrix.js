function maximumSumSubmatrix(matrix, size) {
  	const sum = [[matrix[0][0]]];
	let maxSum = -Infinity;
	for (let i = 1; i < matrix[0].length; i++) {
		sum[0].push(matrix[0][i] + sum[0][i - 1]);
	}
	for (let i = 1; i < matrix.length; i++) {
		sum.push([matrix[i][0] + sum[i - 1][0]]);
	}
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[0].length; j++) {
			sum[i][j] = matrix[i][j] + sum[i - 1][j] 
				+ sum[i][j - 1] - sum [i - 1][j - 1]; 
		}
	}
	for (let i = size - 1; i < matrix.length; i++) {
		for (let j = size - 1; j < matrix[0].length; j++) {
			let curSum = sum[i][j];
			if (j >= size) curSum -= sum[i][j-size];
			if (i >= size) curSum -= sum[i-size][j];
			if (i >= size && j >= size) curSum += sum[i-size][j-size];
			maxSum = Math.max(maxSum, curSum);
		}
	}
	return maxSum;
}


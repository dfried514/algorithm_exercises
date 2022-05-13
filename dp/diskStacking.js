function diskStacking(disks) {
	let maxIdx = 0;
	let maxHeight = -Infinity;
  	const sorted = disks.sort((a, b) => a[2] - b[2]);
	const dp = sorted.map(x => [x[2], [x]]);
	for (let i = 1; i < sorted.length; i++) {
		for (j = 0; j < i; j++) {
			if (sorted[j][0] < sorted[i][0] 
					&& sorted[j][1] < sorted[i][1]
					&& sorted[j][2] < sorted[i][2]
				 && sorted[i][2] + dp[j][0] > dp[i][0]) {
				dp[i] = [sorted[i][2] + dp[j][0], [...dp[j][1], sorted[i]]];
			}
		}
		if (dp[i][0] > maxHeight) {
			maxHeight = dp[i][0];
			maxIdx = i;
		}
	}
	return dp[maxIdx][1];
}


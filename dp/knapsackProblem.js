function knapsackProblem(items, capacity) {
	const dp = [[]];
	for (let i = 0; i <= capacity; i++) {
		dp[0].push([0, []]);
	}
	for (let i = 1; i <= items.length; i++) {
		dp.push([[0, []]]);
		for (let j = 1; j <= capacity; j++) {
			if (items[i - 1][1] > j) {
				dp[i][j] = dp[i - 1][j];
			}
			else {
				if (items[i - 1][0] + dp[i - 1][j - items[i - 1][1]][0] > dp[i - 1][j][0]) {
					dp[i][j] = [items[i - 1][0] + dp[i - 1][j - items[i - 1][1]][0], 
										 [...dp[i - 1][j - items[i - 1][1]][1], i - 1]];
				} else {
					dp[i][j] = dp[i - 1][j];
				}
			}
		}
	}
	return dp[dp.length - 1][capacity];
}

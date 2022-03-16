function maxSubsetSumNoAdjacent(array) {
	if (array.length <= 1) return array[0] ?? 0;
  const dp = [];
	dp[0] = array[0] ?? 0;
	dp[1] = array[1] ?? 0;
	dp[2] = dp[0] + array[2] || 0;
			
	for (let i = 3; i < array.length; i++) {
		dp[i] = array[i] + Math.max(dp[i - 3], dp[i - 2]);
	}
	return Math.max(dp[dp.length - 1], dp[dp.length - 2]);
}

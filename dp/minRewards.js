function minRewards(scores) {
  	dp = new Array(scores.length).fill(1);
	for (let i = 1; i < scores.length; i++) {
		if (scores[i] > scores[i - 1]) dp[i] = dp[i - 1] + 1; 
	}
	for (let i = scores.length - 2; i >= 0; i--) {
		if (scores[i] > scores[i + 1]) dp[i] = Math.max(dp[i], dp[i + 1] + 1);
	}
	return dp.reduce((a, b) => a + b);
}

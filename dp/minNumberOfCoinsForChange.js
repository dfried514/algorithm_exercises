function minNumberOfCoinsForChange(n, denoms) {
  const dp = new Array(n + 1).fill(Infinity);
	dp[0] = 0;
	for (let i = 1; i <= n; i++) {
		for (let j = 0; j < denoms.length; j++) {
			if (i >= denoms[j])
				dp[i] = Math.min(dp[i], (dp[i - denoms[j]] + 1));
		}
	}
	return dp[n] < Infinity ? dp[n] : -1;
}


function longestCommonSubsequence(str1, str2) {
  	const dp = [[]];
	for (let i = 0; i <= str2.length; i++) {
		dp[0].push([]);
	}
	for (let i = 1; i <= str1.length; i++) {
		dp.push([[]]);
		for (let j = 1; j <= str2.length; j++) {
				if (str1.charAt(i - 1) == str2.charAt(j - 1))
					dp[i][j] = [...dp[i - 1][j - 1], str1.charAt(i - 1)];
				else
					dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length
						? dp[i - 1][j]
						: dp[i][j - 1];
		}
	}
	return dp[str1.length][str2.length];
}


function levenshteinDistance(str1, str2) {
	const dp = [];
	for (let i = 0; i <= str1.length; i++) {
		dp[i] = [i];
	}
	for (let j = 0; j <= str2.length; j++) {
		dp[0][j] = j; 
	}
	for (let i = 0; i < str1.length; i++) {
		for (let j = 0; j < str2.length; j++) {
			if (str1.charAt(i) == str2.charAt(j)) 
				dp[i][j]--;
			dp[i+1][j+1] = Math.min(dp[i][j], dp[i][j+1], dp[i+1][j]) + 1; 
		}
	}
	return dp[str1.length][str2.length];
}


function longestPalindromicSubstring(string) {
	if (string.length == 0) return 0;
	let maxSubString = string.substring(0, 1);
  	const dp = [];
	for (let i = 0; i < string.length; i++) {
		dp[i] = [];
		dp[i][i] = true;
		if (i < string.length - 1 && string.charAt(i) == string.charAt(i + 1)) {
			dp[i][i + 1] = true;
			maxSubString = string.substring(i, i + 2);
		}
	}
	for (let step = 2; step < string.length; step++) {
		for (let idx = 0; idx < string.length - step; idx++) {
			dp[idx][idx + step] = string.charAt(idx) == string.charAt(idx + step)
				&& dp[idx + 1][idx + step - 1];
			if (dp[idx][idx + step] && (step + 1) > maxSubString.length) 
				maxSubString = string.substring(idx, idx + step + 1);
		}
	}
	return maxSubString;
}


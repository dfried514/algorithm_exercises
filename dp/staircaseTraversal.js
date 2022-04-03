function staircaseTraversal(height, maxSteps) {
  	const dp = [];
		let sum = 0, cur;
		for (let i = 0; i < maxSteps; i++) {
			cur = 2 ** i;
			dp.push(cur);
			sum += cur;
		}
		if (height > maxSteps) 
			dp.push(sum);
		for (let i = maxSteps + 1; i < height; i++) {
			dp.push((2 * dp[i - 1]) - dp[i - 1 - maxSteps]);
		}
		return dp[dp.length - 1];
}

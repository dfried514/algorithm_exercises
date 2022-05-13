function numbersInPi(pi, numbers) {
	let minCnt = Infinity;
	const hash = {};
	for (num of numbers) {
		hash[num] = true;
	}
	const dp = [];
	for (let i = 0; i < pi.length; i++) {
		dp.push([]);
		for (let j = 0; j < pi.length; j++) {
			dp[i].push(false);
		}
	}
	const rec = (cnt, start, end) => {
		if (end < start) {
			if (hash[pi.substring(start)]) 
				minCnt = Math.min(minCnt, cnt);
			return;
		}
		if (dp[start][end])
			return;
		dp[start][end] = true;
		if (hash[pi.substring(start, end + 1)])
			rec(cnt + 1, end + 1, pi.length - 1);
		rec(cnt, start, end - 1);
	}
	rec(0, 0, pi.length - 1);
	return minCnt < Infinity ? minCnt : -1;
}

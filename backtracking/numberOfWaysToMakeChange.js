function numberOfWaysToMakeChange(n, denoms) {
  let res = 0;
	const bt = (sum, candidates) => {
		if (sum == n) {
			res++;
			return;
		}
		for (let i = 0; i < candidates.length; i++) {
			if (sum + candidates[i] > n)
				break;
			bt(sum + candidates[i], candidates.slice(i));
		}
	}
	bt(0, denoms);
	return res;
}

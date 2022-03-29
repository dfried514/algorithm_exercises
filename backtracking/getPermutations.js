function getPermutations(array) {
	if (array.length == 0) return [];
  const res = [];
	const rec = (sol, candidates) => {
		if (!candidates.length) {
			res.push(sol);
			return;
		}
		for (let i = 0; i < candidates.length; i++) {
			rec([...sol, candidates[i]], 
					[...candidates.slice(0, i), ...candidates.slice(i + 1)]);
		}
	}
	rec([], array);
	return res;
}


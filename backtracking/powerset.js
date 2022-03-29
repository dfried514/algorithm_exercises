function powerset(array) {
  const res = [];
	const rec = (sol, candidates) => {
		res.push([...sol]);
		for (let i = 0; i < candidates.length; i++) {
			rec([...sol, candidates[i]], candidates.slice(i + 1));
		}
	}
	rec([], array);
	return res;
}

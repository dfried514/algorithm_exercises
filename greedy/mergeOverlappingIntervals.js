function mergeOverlappingIntervals(array) {
  const res = [];
	const sorted = array.sort((a, b) => a[0] - b[0]);
	let idx = 0, cur;
	
	while(idx < sorted.length) {
		cur = [...sorted[idx++]]; 
		while (idx < sorted.length && sorted[idx][0] <= cur[1]) {
			cur[1] = Math.max(cur[1], sorted[idx++][1]);
		}
		res.push(cur);
	}
	return res;
}

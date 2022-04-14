function minimumCharactersForWords(words) {
	const res = [], hash = {};
	for (const w of words) {
		const curHash = {};
		for (const l of w) {
			curHash[l] = curHash[l] + 1 || 1;
		}
		for (const l of Object.keys(curHash)) {
			hash[l] = hash[l] ? Math.max(hash[l], curHash[l]) : curHash[l];
		}
	}
	for (const [l, cnt] of Object.entries(hash)) {
		for (let i = 0; i < cnt; i++) {
			res.push(l);
		}
	}
	return res;
}


function groupAnagrams(words) {
	const hash = {};
	words.forEach(w => {
		const curSorted = w.split('').sort().join('');
		if (hash[curSorted])
			hash[curSorted].push(w);
		else
			hash[curSorted] = [w];
	});
	return Object.values(hash);
}

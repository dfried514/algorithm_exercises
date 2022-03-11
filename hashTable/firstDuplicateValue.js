function firstDuplicateValue(array) {
  const memo = {};
	
	for (let i = 0; i < array.length; i++) {
		if (memo[array[i]] !== undefined) return array[i];
		memo[array[i]] = true;
	}
  return -1;
}

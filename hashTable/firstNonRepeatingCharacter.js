function firstNonRepeatingCharacter(string) {
	if (string.length == 0) return -1;
  const hash = {};
	for (let i = 0; i < string.length; i++) {
		hash[string.charAt(i)] = hash[string.charAt(i)] >= 0 ? Infinity : i;
	}
	const charIdx = Object.entries(hash).sort((a, b) => a[1] - b[1])[0][1];
	return charIdx < Infinity ? charIdx : -1;
}

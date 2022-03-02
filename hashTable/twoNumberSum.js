// Use hash table to store difference between targetSum 
// and current value, if found in hash table return two values
function twoNumberSum(array, targetSum) {
  const hash = {};
	hash[array[0]] = true;
	for (let i = 1; i < array.length; i++) {
		if (hash[targetSum - array[i]])
			return [targetSum - array[i], array[i]];
		hash[array[i]] = true;
	}
	return [];
}

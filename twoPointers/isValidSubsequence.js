/*
Classic two pointer problem
iterate over first array, matching chars of second
if second is finished, return true, else false
/*
function twoNumberSum(array, targetSum) {
  const hash = {};
	hash[array[0]] = true;
	for (let i = 1; i < array.length; i++) {
		if (hash[targetSum - array[i]])
			return [targetSum - array[i], array[i]];
		hash[array[i]] = true;
	}
	return false;
}

// recursive solution
// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array) {
  const rec = (array, level) => {
		let total = 0;
		for (let i = 0; i < array.length; i++) {
			if (Array.isArray(array[i])) total += rec(array[i], level + 1);
			else total += array[i];
		}
		return total * level;
	}
	return rec(array, 1);
}

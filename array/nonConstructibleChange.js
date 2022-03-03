/*
initial count to 1, iterate over array, 
if current value > count, return count
return count
*/
function nonConstructibleChange(coins) {
  const sortedCoins = [...coins].sort((a, b) => a - b);
	let count = 1;
	for (let i = 0; i < sortedCoins.length; i++) {
		if (sortedCoins[i] > count)
			return count;
		count += sortedCoins[i];
	}
	return count;
}

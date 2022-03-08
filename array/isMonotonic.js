function isMonotonic(array) {
	const nonIncreasing = array => {
		for (let i = 1; i < array.length; i++) {
			if (array[i] > array[i - 1]) return false;
		}
		return true;
	}
	const nonDecreasing = array => {
		for (let i = 1; i < array.length; i++) {
			if (array[i] < array[i - 1]) return false;
		}
		return true;
	}
	return nonIncreasing(array) || nonDecreasing(array);
}


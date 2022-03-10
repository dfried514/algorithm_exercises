function longestPeak(array) {
  let maxPeak = 0;
	let left = 0, right;

	while (left < array.length - 1) {
		while (left < array.length - 1 && array[left] >= array[left + 1]) {
			left++;
		}
		if (left == array.length - 1) return maxPeak;
		let right = left + 1;
		
		while (right < array.length - 1 && array[right] < array[right + 1]) {
			right++;
		}
		if (right == array.length - 1) return maxPeak;
		if (array[right] == array[right + 1]) {
			left = right + 1;
			continue;
		}
		while (right < array.length - 1 
			&& array[right] > array[right + 1]) {
				right++;
		}
		maxPeak = Math.max(maxPeak, (right - left) + 1);
		left = right;
	}
	return maxPeak;
}

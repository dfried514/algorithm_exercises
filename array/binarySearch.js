function binarySearch(array, target) {
  let low = 0;
	let high = array.length - 1;
	let mid = Math.floor((low + high) / 2);
	
	while (low < high) {
		if (target == array[mid]) return mid;
		if (target > array[mid]) {
			low = mid + 1;
		} else {
		 	high = mid - 1;
		}
		mid = Math.floor((low + high) / 2);
	}
	return target == array[mid] ? mid : -1;
}


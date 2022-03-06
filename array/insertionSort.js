function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
		let j = i - 1;
		let key = array[i];
		
		while (j >= 0 && array[j] > key) {
			array[j + 1] = array[j--];
		}
		if (j < i - 1) array[j + 1] = key;
	}
	return array;
}


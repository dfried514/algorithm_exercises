function minNumberOfJumps(array) {
	if (array.length <= 1) return 0;
  	let jumps = idx = 0;
	while (true) {
		let nextJump = nextIdx = idx;
		for (let i = 1; i <= array[idx]; i++) {
			if (idx + i >= array.length - 1)
				return jumps + 1;
			if (idx + i + array[idx + i] > nextJump) {
				nextJump = idx + i + array[idx + i];
				nextIdx = idx + i;
			}
		}
		idx = nextIdx;
		jumps++;
	}
}

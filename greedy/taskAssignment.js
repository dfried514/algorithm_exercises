function taskAssignment(k, tasks) {
	const res = [];
	const converted = tasks
		.map((val, idx) => [val, idx])
		.sort((a, b) => a[0] - b[0])
		.map(elem => elem[1]);
	
	for (let i = 0; i < converted.length / 2; i++) {
		res.push([converted[i], converted[converted.length - 1 - i]]);
	}
	return res;
}

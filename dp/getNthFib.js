// dynamic solution with tabular bottom up implimentation
function getNthFib(n) {
  let prev1 = 0;
	let prev2 = 1;
	
	for (let i = 2; i < n; i += 2) {
		prev1 += prev2;
		prev2 += prev1;
	}
	return n % 2 == 0 ? prev2 : prev1;
}


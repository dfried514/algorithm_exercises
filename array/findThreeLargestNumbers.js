// iteration and comparisons
function findThreeLargestNumbers(array) {
  let threeLargest = [null, null, null];
	let a, b, c;
	for (let i = 0; i < array.length; i++) {
		[a, b, c] = threeLargest;
		if (c == null || array[i] > c) threeLargest = [b, c, array[i]];
		else if (b == null || array[i] > b) threeLargest = [b, array[i], c];
		else if (a == null || array[i] > a) threeLargest = [array[i], b, c];
	}
	return threeLargest;
}

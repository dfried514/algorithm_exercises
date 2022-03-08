// sort, two pointers
function smallestDifference(arrayOne, arrayTwo) {
  const sortedArray1 = arrayOne.sort((a, b) => a - b);
	const sortedArray2 = arrayTwo.sort((a, b) => a - b);
	let p1 = p2 = 0;
	let smallest = Infinity;
	let res;
	
	while (p1 < sortedArray1.length && p2 < sortedArray2.length) {
		if (Math.abs(sortedArray1[p1] - sortedArray2[p2]) < smallest) {
			res = [sortedArray1[p1], sortedArray2[p2]];
			smallest = Math.abs(sortedArray1[p1] - sortedArray2[p2]);
		}
		if (sortedArray1[p1] <= sortedArray2[p2]) 
			p1++;
		else 
			p2++;
	}
	return res;
}

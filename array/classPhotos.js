/*
sort both groups in descending order,
iterate to determine if every member of one group
is taller than the corresponding member of the other group
*/
function classPhotos(redShirtHeights, blueShirtHeights) {
	const sortedReds = [...redShirtHeights].sort((a, b) => b - a);
	const sortedBlues = [...blueShirtHeights].sort((a, b) => b - a);
	const compare = (group1, group2) => {
		for (let i = 0; i < group1.length; i++) {
			if (group1[i] <= group2[i]) return false;
		}
		return true;
	} 
	return compare(sortedReds, sortedBlues) 
		|| compare(sortedBlues, sortedReds);
}

function sunsetViews(buildings, direction) {
  const res = [];
	let maxHeight = 0;
	if (direction == 'WEST') {
		for (let i = 0; i < buildings.length; i++) {
			if (buildings[i] > maxHeight) {
				res.push(i);
				maxHeight = buildings[i];
			}
		}
		return res;
	}
	for (let i = buildings.length - 1; i >= 0; i--) {
		if (buildings[i] > maxHeight) {
			res.push(i);
			maxHeight = buildings[i];
		}
	}
	return res.reverse();
}


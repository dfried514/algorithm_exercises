function validStartingCity(distances, fuel, mpg) {
	let idx = 1, start = totalDistance = totalFuel = 0;
	while (idx <= distances.length) {
		while (distances[idx - 1] < fuel[idx - 1] * mpg) {
			idx++;
		}
		if (idx == distances.length) return start;
		start = idx;
		totalDistance += distances[idx - 1];
		totalFuel += (fuel[idx - 1] * mpg);
		
		if (totalDistance < totalFuel) {
			totalDistance = 0;
			totalFuel = 0;
		}
		
}

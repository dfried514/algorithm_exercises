// O(n) time | O(1} space
// Simple pass
function validStartingCity(distances, fuel, mpg) {
	let totalDistance, totalFuel, start, idx = 1;
	
	while (idx <= distances.length) {
		totalDistance = distances[idx - 1];
		totalFuel = fuel[idx - 1] * mpg;
		while (totalDistance > totalFuel) {
			idx++;
			totalDistance = distances[idx - 1];
			totalFuel = fuel[idx - 1] * mpg;
		}
		start = idx - 1;
		while (totalDistance <= totalFuel) {
			idx++;
			totalDistance += distances[idx - 1];
			totalFuel += fuel[idx - 1] * mpg;
		}
	}
	return start;
}


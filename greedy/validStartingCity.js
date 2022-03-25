function validStartingCity(distances, fuel, mpg) {
	let totalDistance = totalFuel = start = 0;
	for (let i = 0; i < distances.length; i++) {
		let curFuel = fuel[i] * mpg;
		totalFuel += curFuel;
		totalDistance += distances[i];
		
		if (totalFuel < totalDistance && curFuel < distances[i]) 
			start = (i + 1) % distances.length;
	}
	return totalFuel >= totalDistance ? start : -1;
}


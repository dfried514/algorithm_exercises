function minimumPassesOfMatrix(matrix) {
  let numPasses = numNegs = 0;
	let prevPositives = [], nextPositives = [];
	const getAdjacentPoints = ([i, j]) => {
		const adjacentPoints = [];
		if (i - 1 >= 0) adjacentPoints.push([i - 1, j]);
		if (i + 1 < matrix.length) adjacentPoints.push([i + 1, j]);
		if (j - 1 >= 0) adjacentPoints.push([i, j - 1]);
		if (j + 1 < matrix[0].length) adjacentPoints.push([i, j + 1]);
		return adjacentPoints;
	}
  for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] > 0) prevPositives.push([i, j]);
			else if (matrix[i][j] < 0) numNegs++;
		}
	}
	while (true) {
		prevPositives.forEach(point => {
			getAdjacentPoints(point).forEach(([i, j]) => {
				if (matrix[i][j] < 0) {
					matrix[i][j] *= -1
					nextPositives.push([i, j]);
					numNegs--;
				}
			});
		});
		if (nextPositives.length == 0)
			return numNegs == 0 ? numPasses : -1;
		prevPositives = [...nextPositives];
		nextPositives = [];
		numPasses++;	
	}
}


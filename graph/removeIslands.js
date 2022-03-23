function removeIslands(matrix) {
  const dfs = (i, j) => {
		if (i < 0 || i >= matrix.length
			 || j < 0 || j >= matrix[0].length
			 || matrix[i][j] == 2 || matrix[i][j] == 0)
			return;
		matrix[i][j] = 2;
		
		dfs(i + 1, j);
		dfs(i - 1, j);
		dfs(i, j + 1);
		dfs(i, j - 1);
	}
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i][0] == 1) 
			dfs(i, 0);
		if (matrix[i][matrix[0].length - 1] == 1) 
			dfs(i, matrix[0].length - 1);
	}
	for (let i = 1; i < matrix[0].length - 1; i++) {
		if (matrix[0][i] == 1)
			dfs(0, i);
		if (matrix[matrix.length - 1][i] == 1)
			dfs(matrix.length - 1, i);
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			matrix[i][j] = matrix[i][j] == 2 ? 1 : 0;
		}
	}
	return matrix;
}

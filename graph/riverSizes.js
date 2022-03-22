function riverSizes(matrix) {
	const res = [];
  const visited = [];
	const dfs = (i, j) => {
		if (i >= matrix.length || i < 0
				|| j >= matrix[0].length || j < 0
				|| visited[i][j]) 
			return 0;
		visited[i][j] = true;
		if (matrix[i][j] == 0) return 0;
		
		return 1 + dfs(i + 1, j) + dfs(i - 1, j)
			+ dfs(i, j + 1) + dfs(i, j - 1);
	}
	for (let i = 0; i < matrix.length; i++) {
		visited[i] = [];
		for (let j = 0; j < matrix[0].length; j++) {
			visited[i][j] = false;
		}
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (!visited[i][j] && matrix[i][j]) res.push(dfs(i, j));
			else visited[i][j] = true;
		}
	}
	return res;
}


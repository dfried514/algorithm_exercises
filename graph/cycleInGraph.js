function cycleInGraph(edges) {
	let hasCycle = false;
  const visited = [];
	const dfs = (vertex, path = []) => {
		if (path[vertex]) {
			hasCycle = true;
			return;
		}
		if (visited[vertex])
			return;
		path[vertex] = true;
		visited[vertex] = true;
		edges[vertex].forEach(v => dfs(v, [...path]));
	}
	for (let i = 0; i < edges.length; i++) {
		if (!visited[i])
			dfs(i);
	}
  return hasCycle;
}


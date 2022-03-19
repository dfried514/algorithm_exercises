function numberOfWaysToTraverseGraph(width, height) {
  let res = 0;
	const dfs = (w, h) => {
		if (w == width && h == height) {
			res++;
			return;
		}
		if (w > width || h > height) 
			return;
		dfs(w, h + 1);
		dfs(w + 1, h);
	}
	dfs(1, 1);
	return res;
}


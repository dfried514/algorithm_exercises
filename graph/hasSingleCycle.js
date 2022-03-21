function hasSingleCycle(array) {
  const visited = new Array(array.length);
	const getNextIdx = idx => {
		const nextIdx = (array[idx] + idx) % array.length;
  	return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
	}
  const dfs = (idx, numJumps) => {
      if (visited[idx] || numJumps == array.length)
        return idx == 0 && numJumps == array.length;

      visited[idx] = true;
      return dfs(getNextIdx(idx), numJumps + 1);
  }
  return dfs(0, 0);
}


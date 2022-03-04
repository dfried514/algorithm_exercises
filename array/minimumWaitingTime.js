// sort then iteration
function minimumWaitingTime(queries) {
  const sortedQueries = [...queries].sort((a, b) => a - b);
	let waitingTime = prevWaitingTime = 0;
	for (let i = 1; i < sortedQueries.length; i++) {
		prevWaitingTime += sortedQueries[i - 1];
		waitingTime += prevWaitingTime;
	}
	return waitingTime;
}

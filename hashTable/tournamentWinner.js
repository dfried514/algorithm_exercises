/*
iterate over competitions array, find winner, add to hash table,
increment value in hash table,
sort, and return team with greatest value
*/

function tournamentWinner(competitions, results) {
	const hash = {};
  competitions.forEach((teams, idx) => {
		results[idx] == 1 
			? hash[teams[0]] = hash[teams[0]] + 3 || 3
			: hash[teams[1]] = hash[teams[1]] + 3 || 3;
	});
  return Object.keys(hash).sort((a, b) => hash[b] - hash[a])[0];
}


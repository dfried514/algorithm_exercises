function zigzagTraverse(array) {
	if (array.length <= 1) return array[0] || [];
  	const res = [];
	const nextElem = (prev, cur) => {
		//down
		if (prev.col == cur.col) {
			if (prev.col == 0 && array[0].length > 1)
				return {row: prev.row, col: prev.col + 1};
			if (array[0].length > 1)
				return {row: cur.row + 1, col: cur.col - 1};
			return {row: cur.row + 1, col: cur.col};
		}
		//right
		if (prev.row == cur.row) {
			if (prev.row == 0 && array.length > 1) 
				return {row: prev.row + 1, col: prev.col};
			if (array.length > 1)
				return {row: cur.row - 1, col: cur.col + 1};
			return {row: cur.row, col: cur.col + 1};
		}
		//diag down
		if (prev.row == cur.row - 1 && prev.col == cur.col + 1) {
			if (cur.row == array.length - 1)
				return {row: cur.row, col: prev.col};
			if (cur.col == 0)
				return {row: cur.row + 1, col: cur.col};
			return {row: cur.row + 1, col: cur.col - 1};
		}
		//diag up
		if (prev.row == cur.row + 1 && prev.col == cur.col - 1) {
			if (cur.col == array[0].length - 1)
				return {row: prev.row, col: cur.col};
			if (cur.row == 0)
				return {row: cur.row, col: cur.col + 1};
			return {row: cur.row - 1, col: cur.col + 1};
		}
	}
	let prev = {row: 0, col: 0};
	let cur = {row: 1, col: 0};
	res.push(array[prev.row][prev.col]);
	res.push(array[cur.row][cur.col]);
	while (!(cur.row == array.length - 1 && cur.col == array[0].length - 1)) {
		const next = nextElem(prev, cur);
		prev = {...cur};
		cur = {...next};
		res.push(array[cur.row][cur.col]);
	}
	return res;
}


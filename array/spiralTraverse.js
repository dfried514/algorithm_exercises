function spiralTraverse(array) {
  const res = [];
	let sL = 0, eL = array[0].length - 1;
	let sH = 0, eH = array.length - 1;
	
	while (sL <= eL && sH <= eH) {
		for (let i = sL; i < eL; i++) {
			res.push(array[sH][i]);
		}
		for (let i = sH; i <= eH; i++) {
			res.push(array[i][eL]);
		}
		if (sL < eL && sH < eH) {
			for (let i = eL - 1; i > sL; i--) {
				res.push(array[eH][i]);
			}
			for (let i = eH; i > sH; i--) {
				res.push(array[i][sL]);
			}
		}
		sL++;
		eL--;
		sH++;
		eH--;
	}
	return res;
}

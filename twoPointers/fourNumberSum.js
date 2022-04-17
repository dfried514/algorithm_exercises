function fourNumberSum(array, targetSum) {
	let idx1, idx2, l, r, curSum;
    const res = [];
	    const sorted = [...array].sort((a, b) => a - b);
        idx1 = 0;
	    while (idx1 < sorted.length - 3) {
            idx2 = idx1 + 1;
            while (idx2 < sorted.length - 2) {
			        l = idx2 + 1;
			        r = sorted.length - 1;
			        while (l < r) {
				        curSum = sorted[idx1] + sorted[idx2] + sorted[l] + sorted[r];
				        if (curSum == targetSum) {
					        res.push([sorted[idx1], sorted[idx2], sorted[l], sorted[r]]);
                            l++;
                            r--;
                            while (sorted[l] == sorted[l - 1]) l++;
                            while (sorted[r] == sorted[r + 1]) r--;
                        }
				        else if (curSum < targetSum) {
                            l++;
                            while (sorted[l] == sorted[l - 1]) l++;
                        }
				        else {
                            r--;
                            while (sorted[r] == sorted[r + 1]) r--;
                        }
			        }
                    idx2++;
                    while (idx2 < sorted.length - 2 && sorted[idx2] == sorted[idx2 - 1]) {
                        idx2++;
                    }
		    }
            idx1++;
            while (idx1 < sorted.length - 3 && sorted[idx1] == sorted[idx1 - 1]) {
                idx1++;
            }
	    }
	    return res;
}


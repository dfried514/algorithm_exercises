function waterArea(heights) {
	let left = 0;
	let right = heights.length - 1;
  	let leftMax = heights[left];
	let rightMax = heights[right];
	let total = 0;
	while (left < right) {
		if (leftMax < rightMax) {
			if (heights[++left] < leftMax)
				total += leftMax - heights[left];
			else
				leftMax = heights[left];
		} else {
			if (heights[--right] < rightMax)
				total += rightMax - heights[right];
			else
				rightMax = heights[right];
		}
	}
	return total;
}

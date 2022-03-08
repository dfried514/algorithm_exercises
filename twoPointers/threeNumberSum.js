// sort, then apply two pointers
function threeNumberSum(array, targetSum) {
  const sortedArray = [...array].sort((a, b) => a - b);
  const res = [];
  let left, right;

  for (let i = 0; i < sortedArray.length - 2; i++) {
    left = i + 1;
    right = sortedArray.length - 1;

    while (left < right) {
      sum = sortedArray[i] + sortedArray[left] + sortedArray[right];
      if (sum == targetSum) {
        res.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
        left++;
      }
      else if (sum < targetSum)
        left++;
      else
        right--;
    }
  }
  return res;
}


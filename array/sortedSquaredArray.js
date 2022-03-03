/*
iterate over array, map squared values, return sorted array
*/

function sortedSquaredArray(array) {
  // Write your code here.
  return array.map(x => x*x).sort((a, b) => a - b);
}

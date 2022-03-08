// two pointers
function moveElementToEnd(array, toMove) {
  let head = 0;
	let tail = array.length - 1;
	
  while (array[tail] == toMove) {
    tail--;
  }
	while (head < tail) {
		while (head < tail && array[head] == toMove) {
			array[head++] = array[tail];
      array[tail--] = toMove;
      while (array[tail] == toMove) {
        tail--;
      }
		}
		head++;
	}
  return array;
}

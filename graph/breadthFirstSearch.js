class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const queue = [this];
		
		while (queue.length) {
			const curNode = queue.shift();
			array.push(curNode.name);
			curNode.children.forEach(child => queue.push(child));
		}
		return array;
  }
}

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
	//dfs with arrays of child nodes
  depthFirstSearch(array) {
		array.push(this.name);
    const dfs = (children) => {
			children.forEach(child => {
				array.push(child.name);
				dfs(child.children);
			})
		}
		dfs(this.children);
		return array;
  }
}

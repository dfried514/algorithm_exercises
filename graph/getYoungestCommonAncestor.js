class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
	const getLevel = descendant => {
		if (topAncestor === descendant || !descendant) return 0;
		return 1 + getLevel(descendant.ancestor);
	}
	let level1 = getLevel(descendantOne);
	let level2 = getLevel(descendantTwo);
	let p1 = descendantOne;
	let p2 = descendantTwo;
	if (level1 > level2) {
		while (level1 > level2) {
			p1 = p1.ancestor;
			level1--;
		}
	} else if (level2 > level1) {
		while (level2 > level1) {
			p2 = p2.ancestor;
			level2--;
		}
	}
	while (p1 !== p2) {
		p1 = p1.ancestor;
		p2 = p2.ancestor;
	}
	return p1;
}

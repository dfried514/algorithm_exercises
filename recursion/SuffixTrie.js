class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    const rec = (idx, node) => {
			if (idx == string.length) {
				node[this.endSymbol] = true;
				return;
			}
			node[string.charAt(idx)] ??= {};
			rec(idx + 1, node[string.charAt(idx)]);
		}
		for (let i = 0; i < string.length; i++) {
			rec(i, this.root);
		}
  }

  contains(string) {
		let node = this.root;
    for (let i = 0; i < string.length; i++) {
			node = node[string.charAt(i)];
			if (!node) return false;
		}
		return new Boolean(node[this.endSymbol]);
  }
}


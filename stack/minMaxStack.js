class MinMaxStack {
	constructor() {
		this.minMaxStack = [];
		this.data = [];
	}

  peek() {
		return this.data[this.data.length - 1];
  }

  pop() {
		this.minMaxStack.pop();
		return this.data.pop();
	}

  push(number) {
		const minMaxObj = {min: number, max: number};
		if (this.data.length) {
			minMaxObj.min 
				= Math.min(this.minMaxStack[this.minMaxStack.length - 1].min, number); 
			minMaxObj.max
				= Math.max(this.minMaxStack[this.minMaxStack.length - 1].max, number);
		}
		this.minMaxStack.push(minMaxObj);
		this.data.push(number);
  }

  getMin() {
		if (this.minMaxStack.length)
			return this.minMaxStack[this.minMaxStack.length - 1].min;
		return null;
  }

  getMax() {
		if (this.minMaxStack.length)
    	return this.minMaxStack[this.minMaxStack.length - 1].max;
		return null;
  }
}


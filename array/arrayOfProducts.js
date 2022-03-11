function arrayOfProducts(array) {
  const pre = [1], post = [], res = [];
	post[array.length - 1] = 1;
	
	for (let i = 1; i < array.length; i++) {
		pre[i] = pre[i - 1] * array[i - 1];
	}
	for (let i = array.length - 2; i >= 0; i--) {
		post[i] = post[i + 1] * array[i + 1];
	}
	for (let i = 0; i < array.length; i++) {
		res[i] = pre[i] * post[i];
	}
	return res;
}

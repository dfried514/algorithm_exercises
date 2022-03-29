function phoneNumberMnemonics(phoneNumber) {
  const chars = {
		0: [0],
		1: [1],
		2: ['a', 'b', 'c'],
		3: ['d', 'e', 'f'],
		4: ['g', 'h', 'i'],
		5: ['j', 'k', 'l'],
		6: ['m', 'n', 'o'],
		7: ['p', 'q', 'r', 's'],
		8: ['t', 'u', 'v'],
		9: ['w', 'x', 'y', 'z']
	};
  const res = [];
	const rec = (sol, idx) => {
		if (idx == phoneNumber.length) {
			res.push(sol);
			return;
		}
		chars[phoneNumber.charAt(idx)].forEach(c => rec(sol + c, idx + 1));
	}
	rec('', 0);
	return res;
}

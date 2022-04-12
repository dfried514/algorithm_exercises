function validIPAddresses(string) {
  	const res = [];
	const rec = (str, ip, numDots) => {
		if (numDots == 3) {
			if (!str.length)
				res.push(ip);
			else
				return;
		}
		let idx = 1;
		let curStr = str.substring(0, idx);
		let curIp = ip.length ? ip + '.' + curStr : curStr;
		let curNum = parseInt(curStr);
		while (idx <= str.length && curNum <= 255) {
			rec(str.substring(idx++), curIp, numDots + 1);
			if (!curNum) return;
			curStr = str.substring(0, idx);
			curIp = ip.length ? ip + '.' + curStr : curStr;
			curNum = parseInt(curStr);
		}
	}
	rec(string, '', -1);
	return res;
}


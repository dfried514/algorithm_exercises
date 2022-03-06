function runLengthEncoding(string) {
  let res = '', idx = 0, count, curChar;

  while (idx < string.length) {
    count = 1;
    curChar = string.charAt(idx);
    while (string.charAt(++idx) == curChar && ++count < 9) {
    }
    res += (count + curChar);
    if (count == 9) idx++;
  }
  return res;
}

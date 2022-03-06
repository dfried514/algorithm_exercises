function caesarCipherEncryptor(string, key) {
  return string.replace(/[a-z]/g, 
		x => String.fromCharCode(((x.charCodeAt(0) + key - 97) % 26) + 97));
}

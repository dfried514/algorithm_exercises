function generateDocument(characters, document) {
  const hash = [];
	for (let i = 0; i < characters.length; i++) {
		hash[characters.charCodeAt(i)]
			= hash[characters.charCodeAt(i)] + 1 || 1;
	}
	for (let i = 0; i < document.length; i++) {
		if (!hash[document.charCodeAt(i)] 
			|| --hash[document.charCodeAt(i)] < 0) return false;
	}
  return true;
}

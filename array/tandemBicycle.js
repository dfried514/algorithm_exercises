// sort and iterate
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	const sortedRed = [...redShirtSpeeds].sort((a, b) => b - a);
	const sortedBlue = [...blueShirtSpeeds].sort((a, b) => b - a);
  let totalSpeed = 0;
	
	if (fastest) {
		let red = blue = 0;
		for (let i = 0; i < sortedRed.length; i++) {
			totalSpeed += sortedRed[red] >= sortedBlue[blue]
				? sortedRed[red++] : sortedBlue[blue++];
		}
	} else {
  	for (let i = 0; i < sortedRed.length; i++) {
			totalSpeed += sortedRed[i] >= sortedBlue[i]
				? sortedRed[i] : sortedBlue[i];
		}
	}
	return totalSpeed;
}

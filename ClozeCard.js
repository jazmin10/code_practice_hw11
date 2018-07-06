// Setting ClozeCard constructor properties
var ClozeCard = function(text, cloze) {
	// Sets properties
	this.cloze = cloze;
	this.fullText = text;
	this.partial = "";

	// Creates the partial text
	this.createPartial = function() {

		// If you cannot find the cloze in the text, then stop program
		if (text.search(cloze) === -1) {
			console.log("cloze not found in full text");
			return;
		}

		// If you do find cloze in text, then replace cloze with "..."
		this.partial = text.replace(cloze, "...");
	}
}

module.exports = ClozeCard;
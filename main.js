// ============ GLOBAL VARIABLES ============
	// Import modules/npm packages
	var inquirer = require("inquirer");
	var BasicCard = require("./BasicCard.js");
	var ClozeCard = require("./ClozeCard.js");

	var promptQs = [{
		name: "cardType",
		type: "list",
		message: "Pick a type of card to create",
		choices: ["Basic Card", "Cloze Card"]
	}];

// ============ FUNCTIONS ============
	// Creating a basic card
	// var firstCard = new BasicCard("Who is the first President of the US?", "George Washington");
	// console.log("Basic Card Example");
	// console.log("Front: " + firstCard.front);
	// console.log("Back: " + firstCard.back);

	// console.log("----------------");

	// var secondCard = new ClozeCard("George Washington is the first president of the US", "George Washington");
	// secondCard.createPartial();
	// console.log("Cloze Card Example");
	// console.log("Cloze: " + secondCard.cloze);
	// console.log("Full Text: " + secondCard.fullText);
	// console.log("Partial Text: " + secondCard.partial);

	function basicCardPrompt() {

		// Holds the prompt questions for a basic card
		var basicQs = [{
			name: "frontInput",
			type: "input",
			message: "Front of the card text:"
		}, {
			name: "backInput",
			type: "input",
			message: "Back of the card text:"
		}];

		// Ask user to enter front and back of card and then...
		inquirer.prompt(basicQs).then(function(basicAnswers) {
			
			// Create a BasicCard object
			var basicCard = new BasicCard(
				basicAnswers.frontInput,
				basicAnswers.backInput
			);

			// Display basic card
			displayBasicCard(basicCard);
		});

	}

	// Displays basic card information
	function displayBasicCard(card) {
		console.log("BASIC CARD");
		console.log("Front: " + card.front);
		console.log("Back: " + card.back);
	}

// ============ MAIN PROCESSES ============
	
	// Ask user the type of card they would want to create
	inquirer.prompt(promptQs).then(function(answer) {
		if (answer.cardType === "Basic Card") {
			basicCardPrompt();
		} 
	});
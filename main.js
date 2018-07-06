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

	// Prompts user to enter basic card details
	function basicCardPrompt() {

		// Holds the prompt questions for a basic card
		var basicQs = [{
			name: "frontInput",
			type: "input",
			message: "Enter front of the card text:"
		}, {
			name: "backInput",
			type: "input",
			message: "Enter back of the card text:"
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

	// Prompts user to enter cloze card details
	function clozeCardPrompt() {

		// Holds prompt questions for a cloze card
		var clozeQs = [{
			name: "textInput",
			type: "input",
			message: "Enter full text:"
		}, {
			name: "clozeInput",
			type: "input",
			message: "Enter cloze:"
		}];

		// Prompts user to enter cloze card information and then...
		inquirer.prompt(clozeQs).then(function(answers) {

			// Create a ClozeCard object
			var clozeCard = new ClozeCard(
				answers.textInput,
				answers.clozeInput
			);

			// Create partial text
			clozeCard.createPartial()

			// Display cloze card information
			displayClozeCard(clozeCard);
		});
	}

	// Displays cloze card information
	function displayClozeCard(card) {
		console.log("CLOZE CARD");
		console.log("Full Text: " + card.fullText);
		console.log("Cloze: " + card.cloze);
		console.log("Partial Text: " + card.partial);		

	}

// ============ MAIN PROCESSES ============
	
	// Ask user the type of card they would want to create
	inquirer.prompt(promptQs).then(function(answer) {
		if (answer.cardType === "Basic Card") {
			basicCardPrompt();
		} 
		else {
			clozeCardPrompt();
		}
	});
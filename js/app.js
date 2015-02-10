
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
	$(".what").click(function(){
	$(".overlay").fadeIn(1000);
	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});


	var guess = $('#userGuess');
	var feedback = $('h2#feedback');
	var numGuesses = 0;
	var randomNum = makeRandomNum();

	
	$('#guessButton').click(function() {
		makeGuess(guess.val());
	});
	//Prevent form from refreshing page
	$('form').submit(function(evt) {
		evt.preventDefault();
	});
	//begin new game
	$('a.new').click(function() {
		newGame();
	});


//------------------------------------------------
	function newGame() {
		numGuesses=0;
		$('span#count').text(numGuesses);
		randomNum = makeRandomNum();
		$('ul#guessList').empty();
		feedback.text("Make your Guess!");
		guess.val('');
	};
	function makeGuess (num){
		function checkGuess (){
			var range = Math.abs(num-randomNum);
			numGuesses++;
			$('span#count').text(numGuesses);
			$('ul#guessList').append('<li>' + num + '</li>');
			if (num === randomNum) {
				feedback.text("Correct!");	
			}else if (range <=5  ) {
			feedback.text("Hot!");
			}else if (range >= 6 && range <= 16) {
				feedback.text("Warm");
			}else if (range >= 17 && range <= 37) {
				feedback.text("Cool");
			}else {
				feedback.text("Cold!");
			}
		};
		//Convert string to integer
		num=+num;
		//If guess isn't a number, prompt user to enter a number
		if (isNaN(num)) {
			feedback.text('Please Enter a Number');
		//Is guess is smaller than 1 or greater than 100, prompt user to enter another number
		}else if (num  <= 0 || num > 100) {
			feedback.text('Please Enter Number Betweeen 1 and 100');
		}else {
			checkGuess();
		}
	}
	function makeRandomNum (){
		return Math.floor((Math.random() * 100) + 1);
	};

//--------------------------
});

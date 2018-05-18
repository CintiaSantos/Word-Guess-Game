    // this is our array of letters in the alphabet 
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        var targetLetter;
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var guessed = [];
        
        
        function renderDivs() {
            document.getElementById("wins").innerHTML = "Your wins so far: " + wins;
            document.getElementById("losses").innerHTML = "Your losses so far: " + losses;
            // `You have ${guessesLeft} guesses left.`;
            document.getElementById("guessLeft").innerHTML = "Number of guesses left: " + guessesLeft;
            document.getElementById("guessed").innerHTML = "letters you have guessed: " + guessed.join(", ")
        }
        
        renderDivs();
        
        function startGame() {
            var numIndex = Math.floor(Math.random() * 27);
            targetLetter = alphabet[numIndex];
            console.log(targetLetter)
        }
        
        startGame();
        
        document.onkeyup = function (e) {
            var clientGuess = e.key
        
            if (clientGuess === targetLetter) {
                alert("You win!");
                wins++;
                startGame();
                renderDivs();
            } else {
                if (guessesLeft < 1) {
                    alert("You lose.  Game over");
                    losses++;
                    guessesLeft = 9;
                    guessed = [];
                    startGame();
                    renderDivs();
                } else {
                    guessesLeft--
                    guessed.push(clientGuess)
                    renderDivs();
                    console.log("You didn't win yet")
                }
            }
        }
window.onload = function() {

var words = ["lion","tiger","hippo","monkey","giraffe","gorilla","bear","snake","koala","alligator","turtle","cheetah","elephant","penguin","llama","alpaca"];
var guessesRemaining = 7;
//generates random #, and assigns it to an item in the array, storing it in randomWord
var randomWord = words[Math.floor((Math.random() * words.length))];
var underScoreWord = "";
var letterGuess = [];
var indexes = [];
var trueFalse = false;


//call underscore function to display randomWord underscores
underScores();

//listen for keypress, and run function
document.addEventListener('keypress', function(event) {
    

    //pushes key pressed into array of guessed letters
    letterGuess.push(String.fromCharCode(event.keyCode));

    //loop through random word's letters, checking against keypress
    for (var j = 0; j < randomWord.length; j++) {
        
        //randomWord is equal to the last letter pressed
        if (randomWord[j] === letterGuess[letterGuess.length-1]) {
            
            //keypress matches charcter
            trueFalse = true;
            //where the matching charcters are
            indexes.push(j);
            //change underScoreWord from string to array for looping
            var splitWord = underScoreWord.split("");

            //loop through splitWord array, and set matching indices to corresponding keypress
            for (k = 0; k < indexes.length; k++) {
                splitWord[indexes[k]] = letterGuess[letterGuess.length-1];
                //reset aray
                indexes = [];
                //display UnderScoreWord
                underScoreWord = splitWord.join("");
            }
        } 
    }

    //if/else statement checking success or failure of matching characters
    if (trueFalse) {
        document.getElementById('randomWord').innerHTML = underScoreWord;
        // If characters match, remove last entered character from letterGuess array
        // I only want incorrect letters in the letterGuess array
        letterGuess.pop();


    } else {
        // If keypress has no matches, lower guesses by 1
        guessesRemaining --
        //display letters guessed
        document.getElementById('guessed').innerHTML = letterGuess;
        //display remaining chances
        document.getElementById('remainingGuesses').innerHTML = "Guesses Remaining: " + guessesRemaining;
    }

    
    trueFalse = false;
    
    checkWin();
    
    images();
    
});



//randomWords into strings
function underScores() {
    for (var i = 0; i < randomWord.length; i++) {
        underScoreWord += "_";
    }
    document.getElementById('randomWord').innerHTML = underScoreWord;
}

//checks to see if player wins or loses and then reset page upon confirm
function checkWin() {
    if (underScoreWord === randomWord) {
            alert("You Win !! The word was indeed "+ randomWord + " ." );
            {window.location.reload();};
            
            
        } else if (guessesRemaining === 0) {
            
            alert("Unfortunately the word was " + randomWord +  " , visit your local zoo and then try again .");
            // Reloads the page
            {window.location.reload();};
            
        }
}   

//add images depending on number of guesses remaining
function images(){
    if (guessesRemaining === 6) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-6.png height='400'/>";

    } else if (guessesRemaining === 5) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-5.png height='400'/>";

    } else if (guessesRemaining === 4) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-4.png height='400'/>";

    } else if (guessesRemaining === 3) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-3.png height='400'/>";
        
    } else if (guessesRemaining === 2) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-2.png height='400'/>";
        
    } else if (guessesRemaining === 1) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-1.png height='400'/>";

    } else if (guessesRemaining === 0) {
        document.getElementById('hangman').innerHTML = "<img src=assets/images/hangman-0.png height='400'/>";   
    }
}




}








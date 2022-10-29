const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const guessSymbol = function (word) {
    const guessSymbolLetters = [];
    for (const letter of word) {
        console.log(letter);
        guessSymbolLetters.push("●");
    }
    wordProgress.innerText = guessSymbolLetters.join("");
};

guessSymbol(word);


guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    //empty message
    message.innerText = "";
    //collect input
    const guess = letterInput.value;

    const goodGuess = letterValidate(guess);

    if (goodGuess) {
        makeGuess(guess);
    }
   // console.log(guess);
    letterInput.value = "";
    
});

const letterValidate = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        //Empty input
        message.innerText = "Please enter a letter from A to Z.";
    } else if (input.length > 1) {
        //More than one letter
        message.innerText = "Please enter one letter.";
    } else if (!input.match(acceptedLetter)) {
        //Entered non-letter
        message.innerText = "Please enter a LETTER from A to Z.";
    } else {
        return input;
    }
};

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    //add guessed letters
   if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter, Try again!";
   } else  {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    previousGuessDisplay();
    updateWordProgress(guessedLetters);
   }
};
 
const previousGuessDisplay = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

const updateWordProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const letterReveal = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            letterReveal.push(letter.toUpperCase());
        } else {
            letterReveal.push("●");
        }
    }
    wordProgress.innerText = letterReveal.join("");
    checkWin();
   // wordArray();
};

const checkWin = function () {
    if (word.toUpperCase() === wordProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    } 
};
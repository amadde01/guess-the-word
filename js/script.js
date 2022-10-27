const guessedLetters = document.querySelector("ul");
const button = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingSpan = document.querySelector("span");
const guessMessage = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

const guessSymbol = function (word) {
    const guessSymbolLetters = [];
    for (const letter of word) {
        console.log(letter);
        guessSymbolLetters.push("●");
    }
    wordProgress.innerText = guessSymbolLetters.join("");
};

guessSymbol(word);


button.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});


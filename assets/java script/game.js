
var wordsList = ["celindion", "janetjackson", "lionelrich", "mariahcarey", "prince", "whiteny","tupac"];
var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];
var letterGuessed = "";
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;
function startGame() {
  numGuesses = 9;
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
  lettersInChosenWord = chosenWord.split("");
  numBlanks = lettersInChosenWord.length;
  console.log(chosenWord);
  blanksAndSuccesses = [];
  wrongGuesses = [];
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }
  console.log(blanksAndSuccesses);
  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}
function checkLetters(letter) {
  var letterInWord = false;
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;

    }
  }
  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {
        blanksAndSuccesses[j] = letter;
      }
    }
    console.log(blanksAndSuccesses);
  }
  else {
    wrongGuesses.push(letter);
    numGuesses--;

  }

}
function roundComplete() {
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);
  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    winCounter++;
if (chosenWord == "celindion") {
  document.getElementById('pictureBox').style.backgroundImage = 'url(assets/images/celinedion.jpg)' ;
  document.getElementById("picture").dataset.video = "https://www.youtube.com/embed/t5Px4jY1TVc" ;
}
if (chosenWord == "janetjackson") {
  document.getElementById('pictureBox').style.backgroundImage = 'url(assets/images/janetjackson.jpg)';
  document.getElementById("picture").dataset.video = "https://www.youtube.com/embed/t5Px4jY1TVc" ;
}
if (chosenWord == "lionelrich") {
  document.getElementById('pictureBox').style.backgroundImage = 'url(assets/images/lionelrich.jpg)';
  document.getElementById("picture").dataset.video = "https://www.youtube.com/embed/t5Px4jY1TVc" ;
}
if (chosenWord == "mariahcarey") {
  document.getElementById('pictureBox').style.backgroundImage = 'url(assets/images/mariahcarey.jpg)';
  document.getElementById("picture").dataset.video = "https://www.youtube.com/embed/t5Px4jY1TVc" ;
}
if (chosenWord === "prince") {
  document.getElementById('pictureBox').style.backgroundImage = 'url(assets/images/Prince.jpg)';
  document.getElementById("picture").dataset.video = "https://www.youtube.com/embed/t5Px4jY1TVc" ;
}
if (chosenWord === "whiteny") {
  document.getElementById('pictureBox').style.backgroundImage = 'url(assets/images/whiteny.jpg)';
  document.getElementById("picture").dataset.video = "https://www.youtube.com/embed/t5Px4jY1TVc" ;

}
if (chosenWord === "tupac") {
  document.getElementById('pictureBox').style.backgroundImage = 'url(assets/images/2pac.jpeg)';
}
    document.getElementById("win-counter").innerHTML = winCounter;

    // Restart the game
    startGame();
  }


   // if we r out of guesses
  else if (numGuesses === 0) {

    // Add to the loss counter
    lossCounter++;

    // Give the user an alert
    alert("You lose");

    // Update the loss counter in the HTML
    document.getElementById("loss-counter").innerHTML = lossCounter;


    // Restart the game
    startGame();

  }

}

startGame();

 // key clicks
document.onkeyup = function(event) {

  // Converts lowercase letters.
  letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

  // Runs the code
  checkLetters(letterGuessed);

  // Runs the code that ends each round.
  roundComplete();
};

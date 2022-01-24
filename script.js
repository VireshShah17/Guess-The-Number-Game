"use strict";
// Generating our random number
const randomNumber = Math.trunc(Math.random() * 20);
console.log(randomNumber);
// Getting access to the highScore and score of the game
let score = 20;
let highScore = 0;
// Function to do work if the user loose
const loose = function(){
    document.querySelector(".message").textContent = "😐You Loose!";
    document.querySelector(".score").textContent = 0;
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#bc8f8f";
    document.querySelector(".number").style.width = "30rem";
}
// Function to get the number inputted by the user
const getTheNumber = function () {
  var guess = Number(document.querySelector(".guess").value);
  // Checking if the user presses the check button without input
  if (!guess) {
    window.alert("Please enter a number and then check it!");
  }
  // Checking if the guess is higher and manipulatig the text
  else if (guess > randomNumber) {
    document.querySelector(".message").textContent = "📈Too High";
    // Checking if score is greater than zero and than reducing it by 1
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      loose();
    }
  }
  // Checking if the guess is lower and manipulatig the text
  else if (guess < randomNumber) {
    document.querySelector(".message").textContent = "📉Too Low";
    // Checking if score is greater than zero and than reducing it by 1
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      loose();
    }
  }
  // Checking if he guesses the correct number
  else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "🎉Correct Number";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
};
// Function to reset the whole game
const resetGame = function () {
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".guess").value = " ";
};
document.querySelector(".check").addEventListener("click", getTheNumber);
document.querySelector(".again").addEventListener("click", resetGame);

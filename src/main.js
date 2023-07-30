"use strict";

const secreteNumber = Math.round(Math.random() * 20);
console.log(secreteNumber);

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        console.log("No number");
        document.querySelector("#guess-status").textContent = "No number";
        document.querySelector(".number").textContent = guess;
    } else if (guess < secreteNumber) {
        document.querySelector("#guess-status").textContent = "Too low";
        document.querySelector(".score").textContent =
            Number(document.querySelector(".score").textContent) - 1;
    } else if (guess > secreteNumber) {
        document.querySelector("#guess-status").textContent = "Too high";
        document.querySelector(".score").textContent =
            Number(document.querySelector(".score").textContent) - 1;
    } else {
        document.querySelector("#guess-status").textContent = "Correct number!";
        const highScore = Number(
            document.querySelector(".highscore").textContent
        );
        document.querySelector(".highscore").textContent =
            Number(document.querySelector(".score").textContent) + highScore;
            document.querySelector("body").style.backgroundImage = "linear-gradient(#96c146,#518622)";
    }
});

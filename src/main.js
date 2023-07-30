"use strict";

let secreteNumber = Math.floor(Math.random() * 20) + 1;
console.log(secreteNumber);

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    switch (document.querySelector(".score").textContent) {
        case "0":
            document.querySelector("#guess-status").textContent = "Game over";
            document.querySelector("body").style.backgroundImage =
                "linear-gradient(#e45424f7, #bf2c12)";
            break;
        default:
            if (!guess) {
                console.log("No number");
                document.querySelector("#guess-status").textContent =
                    "No number";
                document.querySelector(".number").textContent = guess;
            } else if (guess < secreteNumber) {
                document.querySelector("#guess-status").textContent = "Too low";
                document.querySelector(".score").textContent =
                    Number(document.querySelector(".score").textContent) - 1;
            } else if (guess > secreteNumber) {
                document.querySelector("#guess-status").textContent =
                    "Too high";
                document.querySelector(".score").textContent =
                    Number(document.querySelector(".score").textContent) - 1;
            } else {
                document.querySelector("#guess-status").textContent =
                    "Correct number!";
                const highScore = Number(
                    document.querySelector(".highscore").textContent
                );
                document.querySelector(".highscore").textContent =
                    Number(document.querySelector(".score").textContent) +
                    highScore;
                document.querySelector("body").style.backgroundImage =
                    "linear-gradient(#96c146,#518622)";
            }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("#guess-status").textContent = "Start guessing...";
    document.querySelector(".score").textContent = "20";
    document.querySelector("body").style.backgroundImage =
        "linear-gradient(#222, #222)";
    secreteNumber = Math.floor(Math.random() * 20) + 1;
    console.log(secreteNumber);
});

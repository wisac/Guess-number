"use strict";

let secreteNumber = Math.floor(Math.random() * 20) + 1;
console.log(secreteNumber);

//start playing
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    switch (document.querySelector(".score").textContent) {   //check played over 20 games
        case "0":
            document.querySelector("#guess-status").textContent = "Game over";
            document.querySelector("body").style.backgroundImage =
                "linear-gradient(#e45424f7, #bf2c12)";
            break;
        //when played less than 20 games
        default:
            if (!guess) {
                console.log("No number");
                document.querySelector("#guess-status").textContent =
                    "No number";
            }
            else if (guess < secreteNumber || guess > secreteNumber) {
                document.querySelector(".number").textContent = guess;
                document.querySelector("#guess-status").textContent =
                    guess < secreteNumber ? "Too low" : "Too high";
                document.querySelector(".score").textContent =
                    Number(document.querySelector(".score").textContent) - 1;
            }
            else {
                document.querySelector(".number").textContent = guess;
                document.querySelector("#guess-status").textContent =
                    "Correct number!";
                let highScore = Number(
                    document.querySelector(".highscore").textContent
                );
                let score = Number(
                    document.querySelector(".score").textContent
                );
                if (highScore < score) {
                    document.querySelector(".highscore").textContent = score;
                }
                document.querySelector("body").style.backgroundImage =
                    "linear-gradient(#96c146,#518622)";
            }
    }
});

//Try again
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

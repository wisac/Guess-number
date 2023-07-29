"use strict";

const secreteNumber = Math.round(Math.random() * 20);
console.log(secreteNumber);

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        console.log("No number");
        document.querySelector("#guess-status").textContent = "No number";
    } else {
        document.querySelector(".number").textContent = guess;
        if (guess < secreteNumber) {
            document.querySelector("#guess-status").textContent = "Too low";
            const oldScore = Number(
                document.querySelector(".score").textContent
            );
            document.querySelector(".score").textContent = oldScore - 1;
        } else if (guess > secreteNumber) {
            document.querySelector("#guess-status").textContent = "Too high";
            const oldScore = Number(
                document.querySelector(".score").textContent
            );
            document.querySelector(".score").textContent = oldScore - 1;
        } else {
            document.querySelector("#guess-status").textContent =
                "Correct number!";
        }
        console.log(typeof guess);
    }
});

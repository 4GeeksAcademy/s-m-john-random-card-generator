/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  console.log("You see this message every time the page loads!");

  const suites = ["♥", "♠", "♦", "♣"];

  const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  function randomCard(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let suite = randomCard(suites);
  console.log("This is the random suite", suite);

  let value = randomCard(cardValues);
  console.log("This is the random value", value);

  let topsuite = document.querySelector("#topsuite");
  topsuite.textContent = suite;

  let bottomsuite = document.querySelector("#bottomsuite");
  bottomsuite.textContent = suite;

  let valueElement = document.querySelector(".number");
  valueElement.textContent = value;
};

// console.log("This is the random number", randomCard(suites));
//};

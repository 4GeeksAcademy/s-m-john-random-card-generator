/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("You see this message everytime the page loads!");

  const suites = ["♥", "♠", "♦", "♣"];

  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  let suite = suites[randomCard(suites)];
  console.log("This is the random suite", suite);

  let topsuite = document.querySelector("#topsuite");
  topsuite.innerHTML = suite;

  let bottomsuite = document.querySelector("#bottomsuite");
  bottomsuite.innerHTML = suite;

  // console.log("This is the random number", randomCard(suites));
};

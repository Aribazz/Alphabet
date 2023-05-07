alert("Hello World");
/*let drumNumber = document.querySelectorAll(".drum").length;
for (let i = 0; i < drumNumber; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    prompt("What is your Name:");
  });
}*/
let drumNumber = document.querySelectorAll(".drum").length;

for (let i = 0; i < drumNumber; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    /*let audio = new Audio("Music/black.mp3");
    audio.play();*/

    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

    //this.style.color = "white";
  });
}
addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  let activebutton = document.querySelector("." + currentKey);
  activebutton.classList.add("pressed");
  setTimeout(function () {
    activebutton.classList.remove("pressed"), 6000;
  });
}

function makeSound(key) {
  switch (key) {
    case "a":
      let audio1 = new Audio("Music/black.mp3");
      audio1.play();
      break;
    case "b":
      let audio2 = new Audio("Music/blue.mp3");
      audio2.play();
      break;
    case "c":
      let audio3 = new Audio("Music/wrong.mp3");
      audio3.play();
      break;
    case "d":
      let audio4 = new Audio("Music/red.mp3");
      audio4.play();
      break;
    case "e":
      let audio5 = new Audio("Music/green.mp3");
      audio5.play();
      break;
    case "f":
      let audio6 = new Audio("Music/yellow.mp3");
      audio6.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}
//CALULATOR BUILDING FOR EFFECTIVE WORK..
/*
function add(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function substraction(num1, num2) {
  return num1 - num2;
}
function division(num1, num2) {
  return num1 / num2;
}
function calculator(num1, num2, operator) {
  return operator(num1, num2);
}
console.log(calculator(2, 3, multiply));
console.log(calculator(4, 3, substraction));*/

//JQUERY INTRODUCTION...
$("h1").css("color", "red");
//JQUERY WHEN THE SCRIPT TAG IS IN THE <HEAD>.
$(Document).ready(function () {
  $("h1").css("color", "red");
});

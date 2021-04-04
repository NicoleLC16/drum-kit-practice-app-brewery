//looping over different button elements to add click event to each one
const buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

//switch functon to handle playing each audio to each letter referrence
function soundSwitch(element) {
  switch (element) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(element);
      break;
  }
}

//click function
function handleClick() {
  const buttonText = this.textContent;
  //   console.log(buttonText);
  soundSwitch(buttonText);
  buttonAnimation(buttonText);
}
//press event
document.addEventListener("keydown", function (e) {
  //   console.log(e);
  soundSwitch(e.key);
  buttonAnimation(e.key);
});

function buttonAnimation(currentKey) {
  const keySelector = document.querySelector("." + currentKey);
  //ex: '.w'

  //animation adding pressed class
  keySelector.classList.add("pressed");
  setTimeout(() => {
    keySelector.classList.remove("pressed");
  }, 100);
  console.log(keySelector);
}

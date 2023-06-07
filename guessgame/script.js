let secretNumber = Math.trunc(Math.random() * 20);

let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "no number";
  } 
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "you win";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "too high";
    score--;
    document.querySelector(".score").textContent = score;
  } 
  // else if (guess < secretNumber) {
  //   document.querySelector(".message").textContent = "too low";
  //   score--;
  //   document.querySelector(".score").textContent = score;
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);

  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

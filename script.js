const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Value!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Value!";
    document.querySelector(".display").textContent = secretNumber;
    document.querySelector(".display").style.width = "100px";
    document.querySelector(".header ").style.backgroundColor = "green";
    document.querySelector(" .main").style.backgroundColor = "green";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".high").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    }
    if (score === 0) {
      document.querySelector(".message").textContent = "💥 You Lost!";
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    }
    if (score === 0) {
      document.querySelector(".message").textContent = "💥 You Lost!";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".display").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".header").style.backgroundColor = "rgb(44, 41, 41)";
  document.querySelector(".main").style.backgroundColor = "rgb(44, 41, 41)";
  document.querySelector(".display").style.width = "50px";
  document.querySelector(".display").style.height = "50px";
});

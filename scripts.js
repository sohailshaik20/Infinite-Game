const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let score = 0;
let highestScore = 0;

// Function to reset the game
function resetGame() {
  dino.style.top = "150px";
  cactus.style.left = "580px";
  score = 0;
  document.getElementById("score").textContent = "Score: " + score;
  isAlive = setInterval(gameLoop, 10);
}

// Main game loop
function gameLoop() {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    clearInterval(isAlive);
    if (score > highestScore) {
      highestScore = score;
      document.getElementById("highest-score").textContent = "Highest Score: " + highestScore; // Update the <h3> tag
    }
    alert("Game Over! Your score: " + score);
    resetGame();
  } else {
    score++;
    document.getElementById("score").textContent = "Score: " + score;
  }
}

let isAlive = setInterval(gameLoop, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

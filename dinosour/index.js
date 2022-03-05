const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");

function jump() {
  score.innerText++;
  dino.classList.add("jump-animation");
  setTimeout(() => {
    dino.classList.remove("jump-animation");
  }, 600);
}
document.addEventListener("keypress", () => {
  if (!dino.classList.contains("jump-animation")) {
    jump();
  }
});

setInterval(() => {
  const dinoTop = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
  );
  const rockLeft = parseInt(
    window.getComputedStyle(rock).getPropertyValue("left")
  );

  if (rockLeft < 0) {
    rock.style.display = "none";
  } else if (rockLeft > 0) {
    rock.style.display = "";
  } else {
    score = score + 1;
  }
  if (rockLeft < 150 && rockLeft > 0 && dinoTop > 270) {
    alert("GAmE OVER");
    Location.reload();
  }
}, 50);

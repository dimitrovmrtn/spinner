const tail = document.getElementById("tail");
const dog = document.getElementById("dog");
const reset = document.getElementById("reset");
const imageText = document.getElementById("image-text");

dog.addEventListener("click", handleClick);
reset.addEventListener("click", handleReset);

document.getElementById("ca").addEventListener("click", copyText);

document.getElementById("eng-button").addEventListener("click", function () {
  imageText.src = "./assets/eng.png";
});

document.getElementById("ch-button").addEventListener("click", function () {
  imageText.src = "./assets/ch.png";
});

let speed = 60; // degrees per second (start slow so changes are noticeable)
let angle = 0;
let lastTime = performance.now();

function rotate(currentTime) {
  const deltaTime = (currentTime - lastTime) / 1000; // seconds
  lastTime = currentTime;

  angle += speed * deltaTime;
  angle %= 360;

  tail.style.transform = `rotate(${angle}deg)`;

  requestAnimationFrame(rotate);
}

const heli = new Audio("./assets/heli.mp3");
const meme = new Audio("./assets/meme.mp3");

function handleClick() {
  speed = Math.min(speed + 120, 6000); // cap at 720 deg/sec
  console.log(`Speed increased to ${speed} degrees/sec`);
  if (speed == 1500) {
    heli.play();
    meme.play();
  }
}

function handleReset() {
  speed = 60;
  heli.pause();
  heli.currentTime = 0;
  meme.pause();
  meme.currentTime = 0;
}

function copyText() {
  const caValue = "CRGqUDQ4JQKx5pTqWHRpwiA95fmpuQe2ir92eBi6hgmW";
  navigator.clipboard
    .writeText(caValue)
    .then(() => {
      alert("CA copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

requestAnimationFrame(rotate); // start the animation loop

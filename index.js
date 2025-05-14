const tail = document.getElementById("tail");
const dog = document.getElementById("dog");

dog.addEventListener("click", handleClick);

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

function handleClick() {
  speed = Math.min(speed + 30, 720); // cap at 720 deg/sec
  console.log(`Speed increased to ${speed} degrees/sec`);
}

requestAnimationFrame(rotate); // start the animation loop

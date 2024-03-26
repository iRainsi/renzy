document.addEventListener("DOMContentLoaded", function() {
  const roleText = document.querySelector('.role-text');
  const newTexts = ["Front-End Web Developer", "Freelancer", "Professional IT Specialist"];
  let currentTextIndex = 0;
  let currentIndex = 0;
  let erase = false;

  function updateText() {
    if (!erase && currentIndex <= newTexts[currentTextIndex].length) {
      roleText.textContent = newTexts[currentTextIndex].substring(0, currentIndex);
      roleText.textContent += "|"; 
      currentIndex++;
      roleText.style.color = "#00cccc"; 
      roleText.style.fontWeight = "bold"; 
      setTimeout(updateText, 100); 
    } else if (erase && currentIndex >= 0) {
      roleText.textContent = newTexts[currentTextIndex].substring(0, currentIndex);
      roleText.textContent += "|"; 
      currentIndex--;
      setTimeout(updateText, 30); 
    } else {
      erase = !erase;
      if (erase) {
        setTimeout(updateText, 1000); 
      } else {
        currentTextIndex = (currentTextIndex + 1) % newTexts.length;
        setTimeout(updateText, 100); 
      }
    }
  }

  updateText(); 
});

const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ["#007a7a", "#006666", "#005151", "#003c3c", "#002828"];

let bubbles = [];

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

class Bubble {
  constructor() {
    this.x = randomRange(0, canvas.width);
    this.y = randomRange(0, canvas.height);
    this.radius = randomRange(2, 6);
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.speed = randomRange(0.05, 0.2); 
    this.directionX = randomRange(-1, 1);
    this.directionY = randomRange(-1, 1);
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.speed * this.directionX;
    this.y += this.speed * this.directionY;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.directionY = -this.directionY;
    }
  }
}

function init() {
  bubbles = [];
  for (let i = 0; i < 200; i++) { 
    bubbles.push(new Bubble());
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let bubble of bubbles) {
    bubble.draw();
    bubble.update();
  }
}

init();
animate();

const text = "My Work. My Skills. My Journey. Explore the Different Sides of My Work.";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("type").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // speed
  }
}

window.onload = typeEffect;

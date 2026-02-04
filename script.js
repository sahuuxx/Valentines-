function moveNo() {
  const noBtn = document.getElementById("noBtn");
  noBtn.style.left = Math.random() * 200 + "px";
  noBtn.style.top = Math.random() * 80 + "px";
}

function yesClicked() {
  document.getElementById("response").innerHTML =
    "YAYYYYY 😭💖💖<br>I love you. Happy Valentine’s 💕";
}

// Floating hearts
const container = document.querySelector(".floating-hearts");

for (let i = 0; i < 25; i++) {
  const heart = document.createElement("span");
  heart.innerHTML = ["💖","💘","💕","💗","🌸"][Math.floor(Math.random()*5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDelay = Math.random() * 5 + "s";
  container.appendChild(heart);
}

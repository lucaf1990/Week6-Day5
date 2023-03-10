console.log("ok");

document.addEventListener("DOMContentLoaded", function () {
  let januaryDiv = document.getElementById("january");
  januaryDiv.style.display = "none";
  januaryDiv.style.animation = "slideInFromLeft 2s ease-out";
});

const myTit = document.getElementById("myTit");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      myTit.classList.add("slide-left");
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(myTit);

const text = document.querySelector(".text-center.display-3");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 2800) {
    text.classList.add("rotate");
  }
});

const text2 = document.querySelector(".text-center.display-3");

const stopBtn = document.querySelector("#stop-btn");

stopBtn.addEventListener("click", function () {
  text2.classList.remove("rotate");
});

function deleteParagraph() {
  let paragraph = document.getElementById("piccoloGioco");
  paragraph.parentNode.removeChild(paragraph);
}

let button = document.getElementById("stop-btn");
button.removeEventListener("click", deleteParagraph);

document.getElementById("deliciousFood").addEventListener("click", function () {
  document.getElementById("piccoloGioco").style.display = "block";
});

function createPar() {
  let thanksDisc = document.createElement("p");
  let y = document.getElementById("piccoloGioco");
  thanksDisc.innerHTML =
    "Oh finally...Thanks for this.. Here a discount code for your next time.. DF8596 expires on May 2024";
  y.appendChild(thanksDisc);
}

button.addEventListener("click", createPar);

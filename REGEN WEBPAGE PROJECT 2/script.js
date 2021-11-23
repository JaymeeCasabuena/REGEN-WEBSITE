const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

var Form1 = document.getElementById("Form1");
var Form2 = document.getElementById("Form2");
var Form3 = document.getElementById("Form3");
var progress = document.getElementById("progress");
var Next1 = document.getElementById("Next1");
var Next2 = document.getElementById("Next2");
var Back1 = document.getElementById("Back1");
var Back2 = document.getElementById("Back2");

Next1.onclick = function() {
  Form1.style.left= "-450px";
  Form2.style.left= "40px";
  progress.style.width = "240px";
}

Back1.onclick = function () {
  Form1.style.left= "40px";
  Form2.style.left= "450px";
  progress.style.width = "120px";
}

Next2.onclick = function() {
  Form2.style.left= "-450px";
  Form3.style.left= "40px";
  progress.style.width = "360px";
}

Back2.onclick = function () {
  Form2.style.left= "40px";
  Form3.style.left= "450px";
  progress.style.width = "240px";
  
}


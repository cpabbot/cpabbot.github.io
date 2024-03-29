var elements;
var windowHeight;

function init() {
  elements = document.querySelectorAll(".hidden");
  windowHeight = window.innerHeight;
}

function checkPosition() {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = elements[i].getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= -50) {
      element.classList.add("fadeUp");
      element.classList.remove("hidden");
    }
  }
}

window.addEventListener("scroll", checkPosition);
window.addEventListener("resize", init);

init();
checkPosition();

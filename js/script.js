// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".header_nav ");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  // Do something else, like open/close menu
});


window.onscroll = function() {stick()};

var navbar = document.getElementById("nb");
var sticky = navbar.offsetTop;

function stick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.style.overflow = "visible";
  } else {
    navbar.classList.remove("sticky");
    navbar.style.overflow = "hidden";
  }
}

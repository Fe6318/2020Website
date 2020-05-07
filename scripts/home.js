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

//How many times can I say the word stick in one function?

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
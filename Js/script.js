//FadeIn on scroll
window.addEventListener("scroll", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Navbar change with jqurey
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $(".navbar").addClass("change");
      $(".navbar-brand").addClass("change-2");
      $(".nav-link").addClass("change-3");
    } else {
      $(".navbar").removeClass("change");
      $(".navbar-brand").removeClass("change-2");
      $(".nav-link").removeClass("change-3");
    }
  });
});

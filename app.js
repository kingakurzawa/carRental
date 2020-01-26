document.addEventListener("DOMContentLoaded", function() {
  const btn = document.querySelector(".header_nav_hamburger");
  const nav = document.querySelector(".header_nav_ul");

  btn.addEventListener("click", function(e) {
    nav.classList.toggle("show");
  });
});

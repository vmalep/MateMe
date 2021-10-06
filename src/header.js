// For the header
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("menu-on");
});


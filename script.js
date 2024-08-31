const navBtn1 = document.getElementById("navbar-option1");
const navBtn2 = document.getElementById("navbar-option2");
const navBtn3 = document.getElementById("navbar-option3");
const cursor = document.querySelector(".cursor");

const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");
const project4 = document.getElementById("project4");
const project5 = document.getElementById("project5");
const project6 = document.getElementById("project6");
const project7 = document.getElementById("project7");
const project8 = document.getElementById("project8");

// Text animation
let typed = new Typed(".text-animation", {
  strings: ["Developer", "Freelancer"],
  typeSpeed: 100,
  typeDelay: 1000,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//Preloader
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".preloader").style.display = "none";
});

// Cursor
document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
document.addEventListener("mouseenter", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
document.addEventListener("wheel", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

// Scroll to sections
navBtn1.addEventListener("click", () => {
  document.getElementById("section1").scrollIntoView();
});

navBtn2.addEventListener("click", () => {
  document.getElementById("section2").scrollIntoView();
});

navBtn3.addEventListener("click", () => {
  document.getElementById("foot-sections2").scrollIntoView();
});

//Project Links
project1.addEventListener("click", () => {
  window.open("https://jesmin-ara.github.io/Youtube-Clone/", "_blank");
});

project2.addEventListener("click", () => {
  window.open("https://jesmin-ara.github.io/Amazon-Clone/", "_blank");
});

project3.addEventListener("click", () => {
  window.open("https://jesmin-ara.github.io/Calculator-/", "_blank");
});

project4.addEventListener("click", () => {
  window.open("https://ruphasan.github.io/Simple-Survey-Form/", "_blank");
});

project5.addEventListener("click", () => {
  window.open("https://jesmin-ara.github.io/Tic-tac-toe-game/", "_blank");
});

project6.addEventListener("click", () => {
  window.open("https://ruphasan.github.io/To-do-list/", "_blank");
});

project7.addEventListener("click", () => {
  window.open("https://jesmin-ara.github.io/Random-quote-generator/", "_blank");
});

project8.addEventListener("click", () => {
  window.open(
    "https://jesmin-ara.github.io/Decimal-to-Binary-converter/",
    "_blank"
  );
});

let navLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navLink.forEach((a) => {
  a.addEventListener("click", () => {
    navCollapse.classList.remove("show");
  });
});

const scrollContainer = document.querySelector(".gallery");
const nextBtn = document.querySelector("#right");
const prevBtn = document.querySelector("#left");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 200;
});

prevBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 200;
});

let days = document.querySelector("#fd");
let hours = document.querySelector("#fh");
let mins = document.querySelector("#fm");
let secs = document.querySelector("#fs");

let days2 = document.querySelector("#sd");
let hours2 = document.querySelector("#sh");
let mins2 = document.querySelector("#sm");
let secs2 = document.querySelector("#ss");

let days3 = document.querySelector("#td");
let hours3 = document.querySelector("#th");
let mins3 = document.querySelector("#tm");
let secs3 = document.querySelector("#ts");

let countDownDate1 = new Date("Jan 5, 2026 15:37:25").getTime();
let countDownDate2 = new Date("May 21, 2025 12:19:55").getTime();
let countDownDate3 = new Date("Oct 28, 2024 10:18:28").getTime();

let timer = setInterval(() => {
  let now = new Date().getTime();

  let distance = countDownDate1 - now;
  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector("#fd").innerHTML = days;
  document.querySelector("#fh").innerHTML = hours;
  document.querySelector("#fm").innerHTML = minutes;
  document.querySelector("#fs").innerHTML = seconds;

  let distance2 = countDownDate2 - now;
  days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
  document.querySelector("#sd").innerHTML = days2;
  document.querySelector("#sh").innerHTML = hours2;
  document.querySelector("#sm").innerHTML = minutes2;
  document.querySelector("#ss").innerHTML = seconds2;

  let distance3 = countDownDate3 - now;
  days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
  document.querySelector("#td").innerHTML = days3;
  document.querySelector("#th").innerHTML = hours3;
  document.querySelector("#tm").innerHTML = minutes3;
  document.querySelector("#ts").innerHTML = seconds3;

  //TODO If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(timer);
    document.querySelector(".timer-section").innerHTML = "EXPIRED";
  }
}, 1000);

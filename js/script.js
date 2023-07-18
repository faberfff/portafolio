//navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-xs-menu-open");
  navbar.classList.toggle("active");
};
//scroll section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.screenY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //stick nav----
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  //togle icon
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
//revealjs
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1000,
  delay: 1000,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portafolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

//muultiple text
//Tecnólogo en desarrollo de software
const typed = new Typed(".multiple-text", {
  strings: [
    "con habilidades para trabajar en equipo, discernimiento en sistemas operativos que facilitan él desarrollo de aplicaciones de software",
    "conocimientos, capacidades y aptitudes necesarias para ejercer así un buen empleo.",
  ],
  typeSpeed: 80,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//for contact
const scriptURL = "https://script.google.com/macros/s/AKfycbzNslMW6Ag_vOr4goQ0LZELxlZ0_tD1g4td3RCsCf9rhc9XWJYYGt1aZJxDeRAUvNBT/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Gracias!! Mensaje enviado correctamente";
      setTimeout(function () {
        msg.innerHTML = "";
        closeDialog("popup");
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
//date
const [date, time] = formatDate(new Date()).split(' ');
//console.log(date); // 👉️ 2021-12-31
//console.log(time); // 👉️ 09:43

// ✅ Set Date input Value
//const dateInput = document.getElementById('date');
//dateInput.value = date;

// 👇️️ "2021-12-31"
//console.log('dateInput value: ', dateInput.value);

// ------------------------------------------------

// ✅ Set time input value
//const timeInput = document.getElementById('time');
//timeInput.value = time;

// 👇️ "09:43"
//console.log('timeInput value: ', timeInput.value);

// ------------------------------------------------

// ✅ Set datetime-local input value
const datetimeLocalInput = document.getElementById('datetime-local');
datetimeLocalInput.value = date + 'T' + time;

// 👇️ "2021-12-31T10:09"
//console.log('dateTimeLocalInput value: ', datetimeLocalInput.value);

// 👇️👇️👇️ Format Date as yyyy-mm-dd hh:mm:ss
// 👇️ (Helper functions)
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      // padTo2Digits(date.getSeconds()),  // 👈️ can also add seconds
    ].join(':')
  );
}

// 👇️ 2022-07-22 08:50:39
//console.log(formatDate(new Date()))

// 👇️ 2025-05-04 05:24
//console.log(formatDate(new Date('May 04, 2025 05:24:07')))
//only number
function onlyNumberKey(evt) {
              
  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
  return true;
}

//permite crear un atajo para enviar un email al correo del propietario
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  efecto.setAttribute('href', `mailto:faverfff@gmail.com?subject=${form.get('name')}${form.get('email')}
  ${form.get('phone')}${form.get('subject')}&body=${form.get('message')}`)
  efecto.click() 
}

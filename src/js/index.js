const sections = document.body.querySelectorAll("section");
const header = document.body.querySelector(".header");
const navMenuBtn = document.body.querySelector(".nav-menu-btn");
const navCloseBtn = document.body.querySelector(".nav-close-btn");
const navigation = document.body.querySelector(".nav-items-container");
const navItems = document.body.querySelectorAll(".nav-items li a");
const changeTheme = document.body.querySelector(".theme");
const changeLanguage = document.body.querySelector(".language-container");
const changeColor = document.body.querySelector(".color-container");
const moon = document.body.querySelector(".bx-moon");
const languages = document.body.querySelectorAll(".language");
const colors = document.body.querySelectorAll(".color");
const changeColorElements = document.body.querySelectorAll(".change-color");
const sitesButton = document.body.querySelector("#sites-button");
const interButton = document.body.querySelector("#inter-button");
const sites = document.body.querySelector(".sites");
const inter = document.body.querySelector(".inter");
const firstImage = document.body.querySelector("#first");
const secondImage = document.body.querySelector("#second");
const inputs = document.body.querySelectorAll(".input");
const contactForm = document.body.querySelector("#contact-form");
const contactMessage = document.body.querySelector("#contact-message");
const cvBtn = document.body.querySelectorAll("#cv");

/* =================================================================== SCROLLING ================================================================== */
let skills = gsap.utils.toArray(".skills-content, .skills-box");
let worksLeft = gsap.utils.toArray(["#first, #sites-button"]);
let worksRight = gsap.utils.toArray(["#second, #inter-button"]);
let contactForms = gsap.utils.toArray([".input-container"]);
let contactTexts = gsap.utils.toArray([".contact-links h2, .contact-icons li"]);
let aboutTexts = gsap.utils.toArray([".about-text h3, .about-text h4, .about-text h5",]);

gsap.registerPlugin(ScrollTrigger);

const reveal = (
  element,
  beforeX,
  beforeY,
  beforeOpacity,
  afterX,
  afterY,
  afterOpacity,
  start,
  end,
  duration,
  markersVisible = false
) => {
  gsap.fromTo(
    element,
    { x: beforeX, y: beforeY, opacity: beforeOpacity },
    {
      opacity: afterOpacity,
      x: afterX,
      y: afterY,
      scrollTrigger: {
        trigger: element,
        start: start,
        end: end,
        duration: duration,
        scrub: true,
        markers: markersVisible
      },
    }
  );
};

reveal(".home-img", 0, 0, 1, 50, -200, 0, "0", "1000", { min: 0.2, max: 3 });
reveal(".home-info h3", 0, 0, 1, 0, -300, 0, "0", "1000", { min: 0.2, max: 3 });
reveal(".home-info h1", 0, 0, 1, 200, -200, 0, "0", "1000", {min: 0.2,max: 3,});
reveal(".home-info h2", 0, 0, 1, -200, -200, 0, "0", "1000", {min: 0.2, max: 3,});
reveal(".home-links", 0, 0, 1, 0, 30, 0, "0", "1000", { min: 0.2, max: 3 });
reveal(".about-img", 0, 100, 0, 0, 0, 1, "top bottom", "bottom 90%", 5);
reveal(".professional-list", 0, 50, 0, 0, 0, 1, "top bottom", "bottom 75%", 5);
reveal(".send-btn", 500, 100, 0, 0, 0, 1, "-100% bottom", "top bottom", 5);

skills.forEach((skill) => {
  reveal(skill, 0, 200, 0, 0, 0, 1, "0", "800", { min: 0.2, max: 3 });
});
worksLeft.forEach((work) => {
  reveal(work, -300, 100, 0, 0, 0, 1, "top bottom", "bottom 90%", 0.5);
});
worksRight.forEach((work) => {
  reveal(work, 300, 100, 0, 0, 0, 1, "top bottom", "bottom 90%", 0.5);
});
aboutTexts.forEach((aboutText) => {
  reveal(aboutText, 500, 100, 0, 0, 0, 1, "top bottom", "bottom 90%", 5);
});
contactTexts.forEach((contactText) => {
  reveal(contactText, -500, 100, 0, 0, 0, 1, "-100% bottom", "top bottom", 5);
});
contactForms.forEach((contactForm) => {
  reveal(contactForm, 500, 100, 0, 0, 0, 1, "top bottom", "90% bottom", 5);
});

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
/* =================================================================== SCROLLING ================================================================== */

/* =============================================================== TYPING ANIMATION =============================================================== */
let firstWord = "Frontend Разработчик";
let secondWord = "Верстальщик";
let thirdWord = "Web Разработчик";
let typingFirstWord = "Привет, меня зовут";
let typingSecondWord = "Нурлыбек Нуржан";

const typing = new Typed(".typing", {
  strings: [firstWord, secondWord, thirdWord],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});

const typingFirst = new Typed(".home-info h3", {
  strings: [typingFirstWord],
  showCursor: false,
  typeSpeed: 40,
  loop: false,
});

const typingSecond = new Typed(".home-info h1", {
  strings: [typingSecondWord],
  showCursor: false,
  typeSpeed: 40,
  loop: false,
});
/* =============================================================== TYPING ANIMATION =============================================================== */

/* ==================================================================== SWIPER ==================================================================== */
const swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grid: {
    rows: 3,
    fill: "row",
  },
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 8,
  breakpoints: {
    900: {
      grid: {
        rows: 1,
        fill: "row",
      },
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
    550: {
      grid: {
        rows: 3,
        fill: "row",
      },
      slidesPerView: 5,
      slidesPerGroup: 1,
    },
  },
});
/* ==================================================================== SWIPER ==================================================================== */

/* ================================================================== NAVIGATION ================================================================== */
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);

  sections.forEach((section) => {
    let sectionHeight = section.offsetHeight;
    let sectionTop = section.offsetTop - 200;
    let sectionId = section.getAttribute("id");

    if (
      window.scrollY > sectionTop &&
      window.scrollY <= sectionTop + sectionHeight
    ) {
      document.body
        .querySelector(".nav-items li a[href*=" + sectionId + "]")
        .classList.add("active");
      return;
    }
    document.body
      .querySelector(".nav-items li a[href*=" + sectionId + "]")
      .classList.remove("active");
  });
});

navMenuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

navCloseBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});
/* ================================================================== NAVIGATION ================================================================== */

/* ================================================================ WORKS APPEARING ================================================================ */
function workAppear(button, box_1, box_2) {
  button.addEventListener("click", () => {
    box_1.classList.toggle("active");
    firstImage.classList.toggle("hidden");
    secondImage.classList.toggle("hidden");
    if (box_2.classList.contains("active")) {
      box_2.classList.remove("active");
      firstImage.classList.add("hidden");
      secondImage.classList.add("hidden");
    }
  });
}

workAppear(sitesButton, sites, inter);
workAppear(interButton, inter, sites);
/* ================================================================ WORKS APPEARING ================================================================ */

/* ==================================================================== CONTACT ==================================================================== */
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
/* ==================================================================== CONTACT ==================================================================== */

/* ================================================================= EMAIL SENDING ================================================================= */
function sendEmail(event) {
  event.preventDefault();
  emailjs
    .sendForm(
      "service_wso5v93",
      "template_4xp4fvo",
      "#contact-form",
      "8U9Kq5D_hlxAvJE2Q"
    )
    .then(() => {
      contactMessage.textContent = "✔️";
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);
      contactForm.reset();
    })
    .catch(() => {
      contactMessage.textContent = "❌";
    });
}

contactForm.addEventListener("submit", sendEmail);
/* ================================================================= EMAIL SENDING ================================================================= */

/* ================================================================= THEME CHANGING ================================================================= */
changeTheme.addEventListener("click", () => {
  moon.classList.toggle("bx-moon");
  moon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark");
});
/* ================================================================= THEME CHANGING ================================================================= */

/* ================================================================ LANGUAGE CHANGING ================================================================ */
changeLanguage.addEventListener("click", () => {
  for (let i = 0; i < languages.length; i++) {
    languages[i].classList.toggle("language-active");
    languages[i].classList.toggle("language-" + Number(i + 1));
  }
});

document.body.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("language-container") ||
    event.target.classList.contains("language") ||
    event.target.classList.contains("bx-world")
  ) {
    return;
  }
  for (let i = 0; i < languages.length; i++) {
    languages[i].classList.remove("language-active");
    languages[i].classList.remove("language-" + Number(i + 1));
  }
});

languages.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.querySelectorAll(".lang").forEach((item) => {
      item.textContent =
        arrayOfLanguages[event.target.getAttribute("value")][
          item.getAttribute("data-key")
        ];
    });

    firstWord = String(
      arrayOfLanguages[event.target.getAttribute("value")].firstWord
    );
    secondWord = String(
      arrayOfLanguages[event.target.getAttribute("value")].secondWord
    );
    thirdWord = String(
      arrayOfLanguages[event.target.getAttribute("value")].thirdWord
    );
    typingFirstWord = String(
      arrayOfLanguages[event.target.getAttribute("value")].hi
    );
    typingSecondWord = String(
      arrayOfLanguages[event.target.getAttribute("value")].myName
    );
    cvLang = String(
      arrayOfLanguages[event.target.getAttribute("value")].language
    );
    typing.strings = [firstWord, secondWord, thirdWord];
    typingFirst.strings = [typingFirstWord];
    typingSecond.strings = [typingSecondWord];
  });
});
/* ================================================================ LANGUAGE CHANGING ================================================================ */

/* ================================================================== COLOR CHANGING ================================================================== */
changeColor.addEventListener("click", () => {
  for (let i = 0; i < colors.length; i++) {
    colors[i].classList.toggle("color-active");
    colors[i].classList.toggle("color-" + Number(i + 1));
  }
});

function changeColorFunc(number, color) {
  colors[number].addEventListener("click", () => {
    changeColorElements.forEach((element) => {
      if (element.classList.contains("hidden")) {
        element.className = `color-change ${color} hidden`;
        return;
      }
      element.className = `color-change ${color}`;

      if (document.body.classList.contains("dark")) {
        document.body.className = `dark theme-${color}`;
        return;
      }
      document.body.className = `theme-${color}`;
    });
  });
}

changeColorFunc(0, "red");
changeColorFunc(1, "yellow");
changeColorFunc(2, "green");
changeColorFunc(3, "cyan");
changeColorFunc(4, "blue");
changeColorFunc(5, "purple");

document.body.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("color-container") ||
    event.target.classList.contains("color") ||
    event.target.classList.contains("colors")
  ) {
    return;
  }
  for (let i = 0; i < colors.length; i++) {
    colors[i].classList.remove("color-active");
    colors[i].classList.remove("color-" + Number(i + 1));
  }
});
/* ================================================================== COLOR CHANGING ================================================================== */

/* ===================================================================== OPEN CV ===================================================================== */
let cvLang = "ru";

cvBtn.forEach((element) => {
  element.addEventListener("click", () => {
    window.open(`/utils/cv/cv-${cvLang}.pdf`, "_blank");
  });
});
/* ===================================================================== OPEN CV ===================================================================== */

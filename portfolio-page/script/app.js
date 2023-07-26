const navToggle = document.querySelector(".navbar__toggle");
const navMenu = document.querySelector(".navbar__menu");
const closeBtn = document.querySelector(".navbar__close");

// Validate if constants exist show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("is-active");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.toggle("is-active");
  });
}

// When click on each nav__link, we remove the 'nav-open' class
const navLink = document.querySelectorAll(".navbar__item");
function linkAction() {
  navMenu.classList.remove("is-active");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Show scroll up

function scrollUp() {
  const scrollUp = document.getElementById("scrollup");
  if (this.scrollY >= 400) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

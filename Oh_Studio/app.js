// Observer OBJ
const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

window.addEventListener("DOMContentLoaded", (e) => {
  const sections = Array.from(document.getElementsByClassName("section"));

  for (let section of sections) {
    const fadeUps = section.getElementsByClassName("fade-delay");
    for (let count = 0; count < fadeUps.length; count++) {
      fadeUps[count].setAttribute(
        "style",
        "transition-delay: " + count * 0.5 + "s"
      );
    }
    observer.observe(section);
  }
});

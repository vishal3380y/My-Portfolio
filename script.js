const tabButtons = document.querySelectorAll(".info-btn");
const tabContents = document.querySelectorAll(".info-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));
    button.classList.add("active");
    document.getElementById(button.getAttribute("data-tab")).classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  const introSection = document.getElementById("intro");
  const socials = document.querySelector(".social-links");
  const introBottom = introSection.offsetTop + introSection.offsetHeight;
  const scrollY = window.scrollY + window.innerHeight / 2;

  socials.style.display = scrollY > introBottom ? "none" : "flex";
});

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
  contactForm.reset();
});

// mobile menu toggle
const menuButton = document.querySelector(".menu-btn");
const navList = document.querySelector("nav ul");

if (menuButton && navList) {
  menuButton.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  // hide menu when a link is clicked
  navList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navList.classList.remove("open");
    });
  });
}

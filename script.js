
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.getAttribute("data-tab")).classList.add("active");
  });
});


window.addEventListener("scroll", () => {
  const homeSection = document.getElementById("home");
  const socialIcons = document.querySelector(".social-icons");
  const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
  const scrollY = window.scrollY + window.innerHeight / 2;

  if (scrollY > homeBottom) {
    socialIcons.style.display = "none";
  } else {
    socialIcons.style.display = "flex";
  }
});

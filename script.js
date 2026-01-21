document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});


const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.style.background = "rgba(255, 255, 255, 0.9)";
  } else {
    header.style.background = "rgba(255, 255, 255, 0.7)";
  }
});

const revealSections = document.querySelectorAll(".about, .skills, .contact");

revealSections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "0.8s ease";
});

function revealOnScroll() {
  revealSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

document.querySelector(".fa-linkedin").onclick = () => {
  window.open("https://www.linkedin.com", "_blank");
};

document.querySelector(".fa-github").onclick = () => {
  window.open("https://github.com", "_blank");
};

document.querySelector(".fa-facebook").onclick = () => {
  window.open("https://facebook.com", "_blank");
};


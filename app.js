document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".show-more");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      console.log(`Redirecting to: ${btn.parentElement.href}`);
    });
  });

  // Active navbar highlight
  const sections = document.querySelectorAll("section, #hero, #about, #skills, #projects, #contact");
  const navLinks = document.querySelectorAll(".navbtn a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const revealItems = document.querySelectorAll(
  ".card, .chapter-grid a, .schedule div, .goal-grid div, .section-title, .section-number"
);

revealItems.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

revealItems.forEach((el) => observer.observe(el));

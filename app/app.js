document.addEventListener("DOMContentLoaded", () => {
  const fadeIns = document.querySelectorAll(".fade-in");
  const slideIns = document.querySelectorAll(".slide-in");

  const observerOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateX(0) translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeIns.forEach((el) => revealOnScroll.observe(el));
  slideIns.forEach((el) => revealOnScroll.observe(el));
});

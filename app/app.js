document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 20% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Add animation class
        observer.unobserve(entry.target); // Stop observing after triggering
      }
    });
  }, observerOptions);

  // Select all elements with the hidden animation classes
  document
    .querySelectorAll(
      ".hidden, .fade-in, .slide-in-left, .slide-in-right, .scale-up"
    )
    .forEach((el) => {
      observer.observe(el);
    });

  console.log("Scroll animations initialized!"); // Debugging message
});

document.addEventListener("DOMContentLoaded", function () {
  const bpSection = document.querySelector(".BP");

  // Reset the 'active' class to allow animation after page refresh
  bpSection.classList.remove("active");

  // Add event listeners for hover
  bpSection.addEventListener("mouseenter", () => {
    bpSection.classList.add("active");
  });

  bpSection.addEventListener("mouseleave", () => {
    // No action needed here since we want the red background to persist
  });
});

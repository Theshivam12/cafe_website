
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const slides = [...document.querySelectorAll(".hero-slide")];
  const dots = [...document.querySelectorAll(".slide-dot")];
  const slideCounter = document.getElementById("slideCounter");
  const pauseButton = document.getElementById("pauseSlider");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Header appearance on scroll
  function updateHeader() {
    header?.classList.toggle("scrolled", window.scrollY > 35);
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  // Mobile navigation
  function closeMenu() {
    navLinks?.classList.remove("open");
    menuToggle?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeMenu();
  });

  // Hero background slider
  let currentSlide = 0;
  let sliderTimer = null;
  let manuallyPaused = reducedMotion.matches;

  function showSlide(index) {
    if (!slides.length) return;

    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);
      dot.setAttribute("aria-pressed", String(i === currentSlide));
    });

    if (slideCounter) {
      slideCounter.innerHTML =
        `${String(currentSlide + 1).padStart(2, "0")} <i>/ ${String(slides.length).padStart(2, "0")}</i>`;
    }
  }

  function stopSlider() {
    if (sliderTimer !== null) {
      clearInterval(sliderTimer);
      sliderTimer = null;
    }
  }

  function startSlider() {
    stopSlider();

    if (
      manuallyPaused ||
      document.hidden ||
      slides.length < 2
    ) return;

    // Requested automatic image change every 1 second.
    sliderTimer = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 1000);
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.slide);
      if (Number.isInteger(index)) showSlide(index);
      startSlider();
    });
  });

  pauseButton?.addEventListener("click", () => {
    manuallyPaused = !manuallyPaused;

    pauseButton.textContent = manuallyPaused ? "▶" : "Ⅱ";
    pauseButton.setAttribute(
      "aria-label",
      manuallyPaused ? "Play slideshow" : "Pause slideshow"
    );

    startSlider();
  });

  document.addEventListener("visibilitychange", startSlider);

  // Respect system reduced-motion preferences.
  function handleMotionPreference(event) {
    if (event.matches) {
      manuallyPaused = true;
      if (pauseButton) {
        pauseButton.textContent = "▶";
        pauseButton.setAttribute("aria-label", "Play slideshow");
      }
      stopSlider();
    }
  }

  if (reducedMotion.addEventListener) {
    reducedMotion.addEventListener("change", handleMotionPreference);
  }

  showSlide(0);
  startSlider();

  // Reveal sections as they enter the viewport.
  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(element => observer.observe(element));
  } else {
    revealElements.forEach(element => element.classList.add("visible"));
  }
});


// Mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

// Dark / Light mode
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const icon = themeToggle.querySelector("i");

  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;

  document.getElementById("progress-bar").style.width =
    (height > 0 ? scrollTop / height * 100 : 0) + "%";
});

// Scroll reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

// Animated skill bars
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target.querySelector(".bar span");
      bar.style.width = bar.dataset.width;
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll(".skill-card").forEach(card => {
  skillObserver.observe(card);
});

// Particles background
if (window.particlesJS) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 55 },
      color: { value: "#8b45ff" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#4e6cff",
        opacity: 0.25,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.5
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 150, line_linked: { opacity: 0.6 } },
        push: { particles_nb: 3 }
      }
    },
    retina_detect: true
  });
}

// Contact form: opens email application with prepared message
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = new FormData(this);
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  const subject = encodeURIComponent("Portfolio Contact from " + name);
  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\n\nMessage:\n" + message
  );

  window.location.href =
    "mailto:smartkarthi2468@gmail.com?subject=" + subject + "&body=" + body;
});

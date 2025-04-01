document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0"); // Remove Bootstrap's hidden class
          entry.target.classList.add("fade-in-visible"); // Add class for visibility
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((el) => observer.observe(el));
});

function goToPageHome() {
  window.location.href = "../index.html";
}

function goToPageAboutUs() {
  window.location.href = "#";
}

function goToPageServicesSound() {
  window.location.href = "../services-page/services-sound-and-lighting.html"; //services-page\services-sound-and-lighting.html
}

function goToPageServicesPhotography() {
  window.location.href =
    "../services-page/services-photography-and-videography.html";
}

function goToPageServicesInstallations() {
  window.location.href =
    "../services-page/services-installations-and-consulting.html";
}

function goToPageServicesSupport() {
  window.location.href =
    "../services-page/services-event-support-and-rentals.html";
}

function goToPagePortfolio() {
  window.location.href = "../portfolio-page/portfolio.html";
}

function goToPageTestimonials() {
  window.location.href = "../testimonials-page/testimonials.html";
}

function goToPageBlog() {
  window.location.href = "../blog-page/blog.html";
}

function goToPageContact() {
  window.location.href = "../contact-page/contact.html";
}

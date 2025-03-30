//write code to change pages here
/*
1.	Home (Landing Page)
2.	About Us
3.	Services (Dropdown with subpages)
4.	Portfolio
5.	Testimonials
6.	Blog (Optional for updates, tips, and news)
7.	Contact Us

*/

function goToPageHome() {
  window.location.href = "index.html";
}

function goToPageAboutUs() {
  window.location.href = "./about-us-page/about-us.html";
}

/* 
<a
                  class="dropdown-item cursor-pointer"
                  onclick="goToPageServicesSound()"
                  >Sound & Lighting</a
                >
                <a
                  class="dropdown-item cursor-pointer"
                  onclick="goToPageServices()"
                  >Photography & Videography</a
                >
                <a
                  class="dropdown-item cursor-pointer"
                  onclick="goToPageServices()"
                  >Installations & COnsulting</a
                >
                <a
                  class="dropdown-item cursor-pointer"
                  onclick="goToPageServices()"
                  >Event Support & Rentals</a
                >
*/

function goToPageServicesSound() {
  window.location.href = "./services-page/services-sound-and-lighting.html"; //services-page\services-sound-and-lighting.html
}

function goToPageServicesPhotography() {
  window.location.href =
    "./services-page/services-photography-and-videography.html";
}

function goToPageServicesInstallations() {
  window.location.href =
    "./services-page/services-installations-and-consulting.html";
}

function goToPageServicesSupport() {
  window.location.href =
    "./services-page/services-event-support-and-rentals.html";
}

function goToPagePortfolio() {
  window.location.href = "./portfolio-page/portfolio.html";
}

function goToPageTestimonials() {
  window.location.href = "./testimonials-page/testimonials.html";
}

function goToPageBlog() {
  window.location.href = "./blog-page/blog.html";
}

function goToPageContact() {
  window.location.href = "./contact-page/contact.html";
}

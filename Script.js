
// =====================================
// ALPHA INDUSTRIES - JAVASCRIPT
// =====================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", isOpen);

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =====================================
// AUTOMATIC COPYRIGHT YEAR
// =====================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =====================================
// LORRY IMAGE CAROUSEL
// =====================================

const slides = document.querySelectorAll(".carousel-slide");

const dotsContainer = document.getElementById("carouselDots");

const nextButton = document.getElementById("nextSlide");

const previousButton = document.getElementById("prevSlide");

let currentSlide = 0;

let carouselTimer;


// CREATE CAROUSEL DOTS

slides.forEach(function (slide, index) {

    const dot = document.createElement("button");

    dot.classList.add("carousel-dot");

    dot.setAttribute(
        "aria-label",
        "Show slide " + (index + 1)
    );

    dot.addEventListener("click", function () {

        showSlide(index);

        restartCarousel();

    });

    dotsContainer.appendChild(dot);

});

const dots = document.querySelectorAll(".carousel-dot");


// DISPLAY SELECTED SLIDE

function showSlide(index) {

    slides[currentSlide].classList.remove("active");

    dots[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");

    dots[currentSlide].classList.add("active");

}


// NEXT IMAGE

function nextSlide() {

    showSlide(currentSlide + 1);

}


// PREVIOUS IMAGE

function previousSlide() {

    showSlide(currentSlide - 1);

}


// AUTOMATIC IMAGE CHANGING

function startCarousel() {

    clearInterval(carouselTimer);

    carouselTimer = setInterval(function () {

        nextSlide();

    }, 4000);

}


// RESTART TIMER AFTER MANUAL CLICK

function restartCarousel() {

    startCarousel();

}


// BUTTON EVENTS

nextButton.addEventListener("click", function () {

    nextSlide();

    restartCarousel();

});


previousButton.addEventListener("click", function () {

    previousSlide();

    restartCarousel();

});


// INITIALIZE CAROUSEL

showSlide(0);

startCarousel();


// =====================================
// CONTACT FORM
// =====================================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const subject = document.getElementById("subject").value;

    const message = document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        formMessage.textContent =
            "Please complete all required fields.";

        return;

    }


    // ADD YOUR BUSINESS WHATSAPP NUMBER HERE.
    // Example: 919876543210
    const whatsappNumber = "";


    if (!whatsappNumber) {

        formMessage.textContent =
            "Please configure your WhatsApp number in script.js to receive enquiries.";

        return;

    }


    const enquiryMessage =
        "Hello Alpha Industries!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Enquiry: " + subject + "\n" +
        "Message: " + message;


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(enquiryMessage);


    window.open(whatsappURL, "_blank");

    formMessage.textContent =
        "Your enquiry has been prepared in WhatsApp.";

    contactForm.reset();

});


// =====================================
// END OF SCRIPT
// =====================================

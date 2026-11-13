
/* ==========================================
   ALPHA INDUSTRIES
   WORKING LORRY IMAGE CAROUSEL
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const carousel = document.getElementById("lorryCarousel");

    if (!carousel) {
        console.error("Lorry carousel not found!");
        return;
    }

    const slides = Array.from(
        carousel.querySelectorAll(".carousel-slide")
    );

    const dotsContainer = document.getElementById("carouselDots");
    const previousButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");

    if (slides.length === 0) {
        console.error("No carousel images found!");
        return;
    }

    let currentIndex = 0;
    let timer;

    // CREATE NAVIGATION DOTS
    dotsContainer.innerHTML = "";

    const dots = slides.map((slide, index) => {
        const dot = document.createElement("button");

        dot.className = "carousel-dot";
        dot.type = "button";
        dot.setAttribute("aria-label", "Show image " + (index + 1));

        dot.addEventListener("click", function () {
            showSlide(index);
            restartTimer();
        });

        dotsContainer.appendChild(dot);

        return dot;
    });

    // DISPLAY SELECTED IMAGE
    function showSlide(index) {

        currentIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.classList.toggle(
                "active",
                i === currentIndex
            );
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle(
                "active",
                i === currentIndex
            );
        });

    }

    // NEXT IMAGE
    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    // PREVIOUS IMAGE
    function previousSlide() {
        showSlide(currentIndex - 1);
    }

    // AUTOMATIC SLIDE CHANGING
    function startTimer() {
        clearInterval(timer);

        if (slides.length > 1) {
            timer = setInterval(nextSlide, 4000);
        }
    }

    function restartTimer() {
        startTimer();
    }

    // BUTTON EVENTS
    nextButton.addEventListener("click", function () {
        nextSlide();
        restartTimer();
    });

    previousButton.addEventListener("click", function () {
        previousSlide();
        restartTimer();
    });

    // PAUSE WHEN MOUSE IS OVER CAROUSEL
    carousel.addEventListener("mouseenter", function () {
        clearInterval(timer);
    });

    carousel.addEventListener("mouseleave", function () {
        startTimer();
    });

    // INITIALIZE
    showSlide(0);
    startTimer();

    console.log("Alpha Industries carousel initialized!");

});

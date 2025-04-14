/* This file contains all JS related to the homepage */

// Import resuable function for observing any element
import { observeElement } from "./util.js";

// Animations for .hero-header
function animateHeroHeader(heroHeader) {
    const tagWrapper = heroHeader.querySelector("#hero .tag-wrapper");
    const heading = heroHeader.querySelector("#hero .heading");

    if (tagWrapper) {
        tagWrapper.classList.add("animate");
    }

    if (heading) {
        heading.classList.add("animate");
    }
}

// Animations for .text-images
function animateTextImages(textImages) {
    const spanOne = textImages.querySelector(".span.one");
    const spanTwo = textImages.querySelector(".span.two");
    const spanThree = textImages.querySelector(".span.three");

    // We do not need to check if the function parameter exists.
    // This check is done in the observeElement() function.
    textImages.classList.add("animate");

    if (spanOne) {
        spanOne.classList.add("animate");
    }

    if (spanTwo) {
        spanTwo.classList.add("animate");
    }

    if (spanThree) {
        spanThree.classList.add("animate");
    }
}

// Animations for .big-numbers-card.<number>
function animateBigNumbersCard(bigNumbersCard) {
    // Since we are not querying for any new elements,
    // there is no need to check if the element exists.
    // This check is done in the observeElement() function.
    bigNumbersCard.classList.add("animate");
}

// Animations for .grid.card
function animateGridCard(gridCard) {
    gridCard.classList.add("animate");
}

// Animations for .works-wrapper .header
function animateWorksWrapperHeader(worksWrapperHeader) {
    worksWrapperHeader.classList.add("animate");
}

// Animations for .collection-list-wrapper (projects)
function animateCollectionList(collectionListWrapper) {
    collectionListWrapper.classList.add("animate");
}

// Animations for .logos-component .slide-interaction
function animateSlideInteraction(slideInteraction) {
    slideInteraction.classList.add("animate");
}

// Animations for .logos-grid
function animateLogosGrid(logosGrid) {
    const logos = logosGrid.querySelectorAll(".logos");

    if (logos.length > 0) {
        logos.forEach((logo) => {
            logo.classList.add("animate");
        });
    }
}

// Animations for .testimonial-wrapper .header
function animateTestimonialWrapperHeader(testimonialWrapperHeader) {
    const h2 = testimonialWrapperHeader.querySelector("h2");
    const div = testimonialWrapperHeader.querySelector("div");

    if (h2) {
        h2.classList.add("animate");
    }

    if (div) {
        div.classList.add("animate");
    }
}

// Function to initialize all animations
function initializeAnimations() {
    // Observe elements in #hero section
    observeElement("#hero .hero-header", animateHeroHeader);

    // Observe elements in #brand-statements section
    observeElement("#brand-statements .text-images", animateTextImages);
    observeElement(
        "#brand-statements .big-numbers-card.one",
        animateBigNumbersCard,
        { threshold: 0.5 },
    );
    observeElement(
        "#brand-statements .big-numbers-card.two",
        animateBigNumbersCard,
        { threshold: 0.5 },
    );
    observeElement(
        "#brand-statements .big-numbers-card.three",
        animateBigNumbersCard,
        { threshold: 0.5 },
    );
    observeElement("#brand-statements .grid .card.one", animateGridCard);
    observeElement("#brand-statements .grid .card.two", animateGridCard);
    observeElement("#brand-statements .grid .card.three", animateGridCard);

    // Observe elements in #featured-projects section
    observeElement(
        "#featured-projects .works-wrapper .header",
        animateWorksWrapperHeader,
        { threshold: 0.2 },
    );
    observeElement(
        "#featured-projects .collection-list-wrapper",
        animateCollectionList,
    );
    observeElement(
        "#featured-projects .slide-interaction",
        animateSlideInteraction,
    );
    observeElement("#featured-projects .logos-grid", animateLogosGrid);
    observeElement(
        "#featured-projects .testimonial-wrapper .header",
        animateTestimonialWrapperHeader,
    );
}

/*-- ------------------------------ -->
<---       Testimonials Slider      -->
<--- ------------------------------ -*/
// Get testimonials container
const testimonialSlider = document.querySelector(
    "#featured-projects .testimonial-slider",
);
// Get individual testimonial cards
const testimonialCards = testimonialSlider.querySelectorAll(
    ".card-testimonial div.slider",
);
// Get previous and next arrows
const prevArrow = testimonialSlider.querySelector(".slider-arrow-left");
const nextArrow = testimonialSlider.querySelector(".slider-arrow-right");
let currentIndex = 0;

// Based on the screen width, we need to
// transform the cards by slighty different offsets.
function getOffset() {
    // Get current screen width
    const screenWidth = window.innerWidth;
    let offset = 0;

    // Mobile
    if (screenWidth < 480) {
        offset = 1;
    }
    // Tablet
    else if (screenWidth > 480 && screenWidth < 768) {
        offset = 0.6;
    }
    // Desktop
    else if (screenWidth >= 768) {
        offset = 0.4;
    }
    return offset;
}

// Function to show the current testimonial card
function showTestimonialCard(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.remove("active", "fade-in", "fade-out");
        if (i === index) {
            card.classList.add("active", "fade-in");
            card.style.transform = `translateX(-${currentIndex * (100 + getOffset())}%)`;
        } else {
            card.classList.add("fade-out");
        }
    });
}

function nextTestimonialCard() {
    testimonialCards[currentIndex].classList.remove("active");
    // Use modulus operator tricks to stay within the array range
    currentIndex = (currentIndex + 1) % testimonialCards.length;
    showTestimonialCard(currentIndex);
}

function prevTestimonialCard() {
    testimonialCards[currentIndex].classList.remove("active");
    // Use modulus operator tricks to stay within the array range
    currentIndex =
        (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonialCard(currentIndex);
}

// Attach event listeners to arrows
nextArrow.addEventListener("click", nextTestimonialCard);
prevArrow.addEventListener("click", prevTestimonialCard);

setInterval(nextTestimonialCard, 1000); // Auto-slide every 5 seconds
showTestimonialCard(currentIndex); // Immediately show the first testimonial
/*-- ------------------------------ -->
<---     Testimonials Slider End    -->
<--- ------------------------------ -*/

// TODO add footer animations

// Initialize all animations on page load
document.addEventListener("DOMContentLoaded", initializeAnimations);

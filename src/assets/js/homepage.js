// This file contains all JS related to the homepage

// Reusable function to observe any element with a custom callback function. Intended for animations.
// Default option is to run callback whenever 20% of the element is within the viewport, then unobserve.
function observeElement(selector, callback, options = { threshold: 0.2 }) {
    const element = document.querySelector(selector);
    if (!element) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callback(entry.target);
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, options);

    observer.observe(element);
}

// Animations for .hero-header
function animateHeroHeader(element) {
    const tagWrapper = element.querySelector("#hero .tag-wrapper");
    const heading = element.querySelector("#hero .heading");

    if (tagWrapper) {
        tagWrapper.classList.add("animate");
    }

    if (heading) {
        heading.classList.add("animate");
    }
}

function initializeAnimations() {
    observeElement(".hero-header", animateHeroHeader);
}

// Initialize all animations on page load
document.addEventListener("DOMContentLoaded", initializeAnimations);

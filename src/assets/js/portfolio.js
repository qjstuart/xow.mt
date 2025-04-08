/* This file contains all JS related to the portfolio page */

// Reusable function to observe any element with a custom callback function. Intended for animations.
// Default option is to run callback whenever 20% of the element is within the viewport, then unobserve.
function observeElement(selector, callback, options = { threshold: 0.2 }) {
    const element = document.querySelector(selector);
    if (!element) {
        console.log(`[!] observeElement(): selector ${selector} not found.`);
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callback(entry.target);
                observer.unobserve(entry.target); // Stop observing after animation
                console.log(`[+] observeElement(): unobserving ${selector}`);
            }
        });
    }, options);

    observer.observe(element);
    console.log(`[+] observeElement(): observing ${selector}`);
}

// Animations for .hero-works
function animateWorksHeader(worksHeader) {
    const tagWrapper = worksHeader.querySelector("#hero-section .tag-wrapper");
    const heading = worksHeader.querySelector("#hero-section .heading-1");

    if (tagWrapper) {
        tagWrapper.classList.add("animate");
    }

    if (heading) {
        heading.classList.add("animate");
    }
}

// Function to initialize all animations
function initializeAnimations() {
    // Observe elements in #hero section
    observeElement("#hero-section .works-header", animateWorksHeader);
}

// Initialize all animations on page load
document.addEventListener("DOMContentLoaded", initializeAnimations);

/* This file contains all JS related to the portfolio page */

// Import resuable function for observing any element
import { observeElement } from "./util.js";

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

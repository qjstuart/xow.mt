/* This file contains all JS related to the contact page */

// Import resuable function for observing any element
import { observeElement } from "./observe.js";

// Animations for .hero-header
function animateHeroHeader(heroHeader) {
    const tagWrapper = heroHeader.querySelector("#hero-form .tag-wrapper");
    const heading = heroHeader.querySelector("#hero-form .heading");

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
    observeElement("#hero-form .hero-header", animateHeroHeader);
}

// Initialize all animations on page load
document.addEventListener("DOMContentLoaded", initializeAnimations);

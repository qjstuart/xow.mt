/* This file contains all JS related to the project details page (portfolio/project-name/) */

// Import resuable function for observing any element
import { observeElement } from "./util.js";

// Animations for all .mask-frame elements
function animateBlogImageWrapper(blogImageWrapper) {
    // Animate .mask-frame, the color fill which covers the project hero image
    const maskFrame = blogImageWrapper.querySelector(".mask-frame");
    if (maskFrame) {
        maskFrame.classList.add("animate");
    }

    // Animate the project hero image (zoom-out effect)
    const image = blogImageWrapper.querySelector("img");
    if (image) {
        image.classList.add("animate");
    }
}

// Function to initialize all animations
function initializeAnimations() {
    observeElement(
        "#project-hero-image .blog-image-wrapper",
        animateBlogImageWrapper,
    );
}

// Initialize all animations on page load
document.addEventListener("DOMContentLoaded", initializeAnimations);

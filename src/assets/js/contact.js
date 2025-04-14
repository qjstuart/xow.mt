/* This file contains all JS related to the contact page */

// Import resuable function for observing any element
import { observeElement } from "./util.js";

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

// AJAX Contact Form submission
async function handleSubmit(event) {
    console.log("Form submission started");
    // Prevent default form submission behaviour
    // This is important to prevent the page from reloading
    // so we can show our own success/fail messages via HTML
    event.preventDefault();

    // Get the form element and form data
    const myForm = event.target;
    const formData = new FormData(myForm);

    // Get html elements for form submission success/fail
    const formSuccessMessage = document.querySelector(
        ".success-message.w-form-done",
    );
    const formFailMessage = document.querySelector(
        ".error-message.w-form-fail",
    );

    // Submit form via HTTP POST request to "/". Netlify processes this
    // request and forwards the form data to an email address of choice.
    try {
        const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        });

        if (!response.ok) {
            // Show form submission fail HTML element
            formFailMessage.classList.add("visible");
            throw new Error("Form submission failed");
        } else {
            // Show form submission success HTML element
            formSuccessMessage.classList.add("visible");
        }
    } catch (error) {
        // For any other reason for failure,
        // we also show form submission fail HTML element.
        formFailMessage.classList.add("visible");
        console.error("Form submission failed: ", error);
    }
}

// Function to initialize all animations
function initializeAnimations() {
    // Observe elements in #hero section
    observeElement("#hero-form .hero-header", animateHeroHeader);
}

// Initialize all animations on page load
document.addEventListener("DOMContentLoaded", initializeAnimations);
// Initialize Contact Form submission handler
document
    .querySelector("form#email-form")
    .addEventListener("submit", handleSubmit);

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

// AJAX Contact Form submission
async function handleSubmit(event) {
    console.log("Form submission started");
    // Prevent default form submission behaviour
    // This is important to prevent the page from reloading
    // so we can show our own success/error messages via HTML
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    const formFailMessage = document.querySelector(".error-message.w-form-fail");
    const formSuccessMessage = document.querySelector(
        ".success-message.w-form-done",
    );

    // fetch("/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: new URLSearchParams(formData).toString(),
    // })
    //     .then(() => console.log("Form successfully submitted"))
    //     .catch((error) => alert(error));

    try {
        const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        });

        if (!response.ok) {
            formFailMessage.classList.add("visible");
            throw new Error("Form submission failed");
        } else {
            formSuccessMessage.classList.add("visible");
            console.log("Form successfully submitted");
        }
    } catch (error) {
        console.error("Error:", error);
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

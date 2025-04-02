/* This file contains all JS related to the homepage */

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
            }
        });
    }, options);

    observer.observe(element);
}

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

function initializeAnimations() {
    observeElement(".hero-header", animateHeroHeader);
    observeElement("#brand-statements .text-images", animateTextImages);
    observeElement(
        "#brand-statements .big-numbers-card.one",
        animateBigNumbersCard,
        (options = { threshold: 1 }),
    );
    observeElement(
        "#brand-statements .big-numbers-card.two",
        animateBigNumbersCard,
        (options = { threshold: 1 }),
    );
    observeElement(
        "#brand-statements .big-numbers-card.three",
        animateBigNumbersCard,
        (options = { threshold: 1 }),
    );
}

// Initialize all animations on page load
document.addEventListener("DOMContentLoaded", initializeAnimations);

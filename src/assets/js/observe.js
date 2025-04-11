// Reusable function to observe any element with a custom callback function. Intended for animations.
// Default option is to run callback whenever 20% of the element is within the viewport, then unobserve.
export function observeElement(
    selector,
    callback,
    options = { threshold: 0.2 },
) {
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

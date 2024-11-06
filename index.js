// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Select the 'About me' link
    const aboutLink = document.querySelector('a[href="#about"]');

    // Listen for a click on the link
    aboutLink.addEventListener('click', function(event) {
        // Prevent the default anchor click behavior
        event.preventDefault();

        // Find the 'About' section
        const aboutSection = document.querySelector('#about');

        // Scroll to the 'About' section smoothly
        aboutSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
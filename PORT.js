// Initialize AOS (Animate On Scroll) library for animations
AOS.init({
    duration: 1200, // Duration for each animation
    once: true, // Only trigger animation once
});

// Back to Top button functionality
// Get the button
const backToTopButton = document.getElementById('back-to-top');

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// When the user clicks the button, scroll to the top of the document
backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Optional: Prevent default behavior for contact form (for now as a placeholder for actual backend functionality)
const contactForm = document.querySelector('.contact-section form');

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent actual form submission (for now)
        alert("Message sent (this is just a placeholder, you would typically handle form submission here).");
    });
}

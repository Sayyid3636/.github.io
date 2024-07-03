// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            top: section.offsetTop - 50, // Adjust scroll offset as needed
            behavior: 'smooth'
        });
    });
});

// Form submission handling
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Retrieve form data
    const formData = new FormData(this);
    const message = formData.get('message');

    // Example: Display message in console (you can implement sending logic here)
    console.log('Message:', message);

    // Optional: Clear form fields after submission
    this.reset();
});

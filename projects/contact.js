document.addEventListener("DOMContentLoaded", () => {

    // Initialize EmailJS
    emailjs.init("zFHrDGa14V2tiFp1l"); 
    // Form submission handler
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form default submission
        // Send email using EmailJS
        });
    
    });
    // Collect form data
    const formData = new FormData(form);
    
    // Convert FormData to an object
    const data = Object.fromEntries(formData.entries());
    
    // Send email using EmailJS
    emailjsr
        .send("service_bu22nyr", "template_ndy58jd", data) // Replace with your IDs
        .then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your message has been sent successfully!");
                form.reset(); // Clear the form
            },
            (error) => {
                console.error("FAILED...", error);
                alert("Failed to send the message. Please try again later.");
            }
        );

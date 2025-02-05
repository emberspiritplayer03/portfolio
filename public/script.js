document.addEventListener("DOMContentLoaded", function() {
    // Hide loading screen and show the container
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.querySelector(".container").style.display = "block";
    }, 3000); // Adjust the time as needed

    // Initialize EmailJS
    emailjs.init("iNghSmLAeWnni-I_r");

    // Disable right-click
    document.addEventListener('contextmenu', event => event.preventDefault());

    // Disable specific keyboard shortcuts for Developer Tools
    document.addEventListener('keydown', event => {
        if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
            event.preventDefault();
        }
    });

    // Handle form submission
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const userEmail = document.getElementById("user-email").value;
        const message = document.getElementById("message").value;

        console.log("Form submitted with values:", { name, userEmail, message });

        const templateParams = {
            name: name,
            email: userEmail,
            message: message,
            to_email: "scplp03@gmail.com" // Replace with your email address
        };

        emailjs.send("service_s14mnn8", "template_efs9vkd", templateParams)
            .then(function(response) {
                console.log("Email sent successfully!", response.status, response.text);
                alert("Message sent successfully!");
                form.reset();
            }, function(error) {
                console.error("Failed to send email:", error);
                alert("Failed to send message. Please try again.");
            });
    });
});

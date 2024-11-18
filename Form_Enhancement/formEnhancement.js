const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
        feedback.textContent = "All fields are required!";
        feedback.style.color = "red";
        return;
    }

     // Log the message to the console
     console.log("Form submitted successfully!");
     console.log("Name:", name);
     console.log("Email:", email);
     console.log("Message:", message);
 
     // Simulate a message being sent (e.g., to a server)
     setTimeout(() => {
         feedback.textContent = "Message sent successfully!";
         feedback.style.color = "green";
     }, 1000); // Simulate delay
 
     // Reset the form
     form.reset();
});

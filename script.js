
document.getElementById("contact-form").addEventListener("buton", function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if(name && email && message) {
        alert("Thank you for reaching out! We will get back to you soon.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields before submitting.");
    }
});
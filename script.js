let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}



document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent default form submission
  
    let form = this;
    let successMessage = document.getElementById("success-message");
  
    // Collect form data correctly
    let formData = {
      name: document.querySelector('input[name="name"]').value,
      email: document.querySelector('input[name="email"]').value,
      phone: document.querySelector('input[name="phone"]').value,
      subject: document.querySelector('input[name="subject"]').value,
      message: document.querySelector('textarea[name="message"]').value
    };
  
    try {
      let response = await fetch(form.action, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData) // Convert form data to JSON
      });
  
      if (response.ok) {
        successMessage.style.display = "block"; // Show success message
        form.reset(); // Clear form fields
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
  
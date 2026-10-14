const menuBtn = document.querySelector('#menu-icon');
const navbar  = document.querySelector('.navbar');

const setMenu = (open) => {
  navbar.classList.toggle('active', open);
  menuBtn.querySelector('i').classList.toggle('bx-x', open);
  menuBtn.setAttribute('aria-expanded', open);
};

menuBtn.addEventListener('click', () => setMenu(!navbar.classList.contains('active')));
navbar.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));
document.addEventListener('click', e => {
  if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) setMenu(false);
});
window.addEventListener('resize', () => innerWidth > 1024 && setMenu(false));


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


new Typed('.typing', {
            strings: ['Software Developer', 'Systems Programmer'],
            typeSpeed: 70,
            backSpeed: 50,
            loop: true
        });

      
        const sr = ScrollReveal({
            distance: '60px',
            duration: 2000,
            delay: 200,
            reset: true
        });

        sr.reveal('.home-content, .heading', { origin: 'top' });
        sr.reveal('.home-img, .skills-container, .projects-box, .contact form', { origin: 'bottom' });
        sr.reveal('.home-content h1, .about-img', { origin: 'left' });
        sr.reveal('.home-content p, .about-content', { origin: 'right' });

        const form = document.getElementById('contact-form');
        const successMsg = document.getElementById('success-message');

        form.onsubmit = function() {
            setTimeout(() => {
                successMsg.style.display = 'block';
                form.reset();
            }, 1000);
        };

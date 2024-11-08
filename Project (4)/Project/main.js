window.onload = function() {
    // Contact button event listener
    const contactButton = document.querySelector('.download-cv');
    if (contactButton) {
      contactButton.addEventListener('click', () => {
        alert('Thank you for your interest! Please fill out the form below to get in touch.');
      });
    }
  
    // Form submit event listener
    const form = document.querySelector('.input-form');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally
  
        // Get input values
        const firstName = document.getElementById('name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
  
        // Check if all fields are filled
        if (firstName && lastName && email) {
          alert(Thank you, ${firstName} ${lastName}! We have received your message. We will contact you at ${email}.);
          form.reset(); // Clear form after submission
        } else {
          alert('Please fill out all required fields.');
        }
      });
    }
  };
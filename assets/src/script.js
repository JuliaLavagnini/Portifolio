const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById(
  "contact-message"
);

const sendEmail = (e) => {
  e.preventDefault();

  /** Use try-catch for better error handling */ 
  try {
    /** Use template literals for better readability */ 
    emailjs
      .sendForm(
        "service_7a1qhxh",
        "template_klzaqib",
        "#contact-form",
        "IqFOhobOC1vERpbzD"
      )
      .then(
        () => {
          // Show sent message
          contactMessage.textContent =
            "Message sent successfully ✅";

          // Remove message after 5 seconds
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);

          /** Clear input fields */ 
          contactForm.reset();
        },
        () => {
          /** Show error message */ 
          contactMessage.textContent =
            "There was an error, message not sent (service error) ❌";
        }
      );
  } catch (error) {
    console.error("Error sending email:", error);
    /** Show a generic error message to the user */ 
    contactMessage.textContent =
      "There was an error, message not sent ❌";
  }
};

contactForm.addEventListener("submit", sendEmail);

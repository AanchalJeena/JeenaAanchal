
  // Typewriter Effect

  const dynamicTextElement = document.getElementById("dynamic-text");
  const words = ["   Web Developer ", "Software Developer "];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 150;
  const erasingSpeed = 75;
  const delayBetweenWords = 2000;
  
  function typeEffect() {
      const currentWord = words[wordIndex];

      dynamicTextElement.style.color = "brown";  // Change the text color here
      
  
      if (isDeleting) {
          dynamicTextElement.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
      } else {
          dynamicTextElement.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
      }
  
      let delay = isDeleting ? erasingSpeed : typingSpeed;
  
      if (!isDeleting && charIndex === currentWord.length) {
          delay = delayBetweenWords;
          isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
      }
  
      setTimeout(typeEffect, delay);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
      setTimeout(typeEffect, typingSpeed);
  });


  /* Social links */
  
  document.querySelectorAll('.social-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();  // Prevent other JS interference
    });
});



// ScrollReveal Animation Options
const scrollRevealOption = {
    distance: "50px",        // Movement distance
    origin: "bottom",        // Animation direction
    duration: 1000,          // Animation time (ms)
    easing: "ease-in-out",   // Smooth transition
    reset: true              // Repeat animation when scrolling
};

// Reveal Project Cards
ScrollReveal().reveal(".project__card", {
    ...scrollRevealOption,
    interval: 400,  // Stagger the animation timing
});

// Reveal Project Card Content with a delay
ScrollReveal().reveal(".project__card__content", {
    ...scrollRevealOption,
    interval: 400,
    delay: 200,  // Delayed reveal effect for content
});


  /* Project Footer */
  
  document.querySelectorAll('.projectFooter_button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();  // Prevent other JS interference
    });
});




  /* Resume_link */
  
  document.querySelectorAll('.resume_link').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();  // Prevent other JS interference
    });
});


/* Contact Details */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let successMsg = document.getElementById('successMsg');

    if (email === "" || message === "") {
        successMsg.style.color = "red";
        successMsg.textContent = "Please fill out all fields.";
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        successMsg.style.color = "red";
        successMsg.textContent = "Enter a valid email.";
        return;
    }

    successMsg.style.color = "lightgreen";
    successMsg.textContent = "Message sent successfully!";
    
    document.getElementById('contactForm').reset();
});


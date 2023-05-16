document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
  });
  
  const introElement = document.querySelector('.intro');
  const introNameElement = document.querySelector('.intro-name');
  const text = introElement.textContent.trim();
  let charIndex = 0;
  
  function type() {
    introElement.textContent = text.slice(0, charIndex + 1);
  
    if (charIndex < text.length - 1) {
      charIndex++;
      introNameElement.style.color = 'aquamarine'; // Apply the desired styling to .intro-name
      setTimeout(type, 200); // Delay between each character typing
    } else {
      introNameElement.style.color = 'aquamarine'; // Apply the desired styling to .intro-name
    }
  }
  
  type();
  
  
  
  
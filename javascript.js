
//hamburger menu for mobile 
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
  });



//type animation 
const introElement = document.querySelector('.intro');
const introNameElement = document.querySelector('.intro-name');

let introText = "";

// Get the text content from the HTML markup
if (introElement) {
  introText = introElement.textContent.trim();
}

introElement.textContent = ""; // Clear the initial content

let index = 0;

function typeAnimation() {
  if (index < introText.length) {
    const nextChar = introText.charAt(index);

    if (introNameElement && index === introText.indexOf(introNameElement.textContent)) {
      const introNameSpan = document.createElement("span");
      introNameSpan.classList.add("intro-name");
      introElement.appendChild(introNameSpan);
      animateText(introNameElement.textContent, introNameSpan);
      index += introNameElement.textContent.length - 1;
    } else {
      const nextSpan = document.createElement("span");
      if (nextChar === " ") {
        nextSpan.innerHTML = "&nbsp;";
      } else {
        nextSpan.textContent = nextChar;
      }
      introElement.appendChild(nextSpan);
    }

    index++;
    setTimeout(typeAnimation, 200);
  }
}

function animateText(text, span) {
  let textIndex = 0;
  const interval = setInterval(function () {
    span.textContent += text[textIndex];
    textIndex++;
    if (textIndex >= text.length) {
      clearInterval(interval);
    }
  }, 100);
}

typeAnimation(); 


//fade in aniatmion 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
        
    });
});
const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));
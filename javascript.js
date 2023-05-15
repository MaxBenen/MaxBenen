document.querySelector('.hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
  });
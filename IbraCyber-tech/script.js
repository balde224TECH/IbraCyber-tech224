document.addEventListener('DOMContentLoaded', function() {

  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');

    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
      }
    });
  });


  const themeToggle = document.querySelector('.theme-toggle');
  const sunIcon = themeToggle.querySelector('.fa-sun');
  const moonIcon = themeToggle.querySelector('.fa-moon');


  function toggleTheme() {
    const isLight = !document.body.classList.contains('light-theme');
    document.body.classList.toggle('light-theme');
    

    sunIcon.style.display = isLight ? 'none' : 'block';
    moonIcon.style.display = isLight ? 'block' : 'none';
    

    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }


  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }


  initTheme();
  themeToggle.addEventListener('click', toggleTheme);

 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nom = document.getElementById('nom')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();
    if (!nom || !email || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    const texte = `Nom: ${nom}%0AEmail: ${email}%0AMessage: ${message}`;
    const numero = '224 620 76 98 37';
    const url = `https://wa.me/${numero}?text=${texte}`;
    window.open(url, '_blank');
});
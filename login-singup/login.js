// Toggle navbar on mobile
    const toggleBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    });


    // signup =====
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Logged in successfully!');
    });
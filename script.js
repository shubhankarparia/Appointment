// Day selection logic
    const dayElements = document.querySelectorAll('.day');
    dayElements.forEach(day => {
      day.addEventListener('click', () => {
        dayElements.forEach(d => d.classList.remove('active'));
        day.classList.add('active');
      });
    });

    // Time slot selection logic
    const timeButtons = document.querySelectorAll('.times button');
    timeButtons.forEach(button => {
      button.addEventListener('click', () => {
        timeButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
      });
    });
    
   


    // Booking confirmation
    document.querySelector('.book-btn').addEventListener('click', () => {
      const selectedDay = document.querySelector('.day.active');
      const selectedTime = document.querySelector('.times button.active');

      if (!selectedDay || !selectedTime) {
        alert('Please select both a day and time slot!');
        return;
      }

      const dayText = selectedDay.textContent.replace(/\s+/g, ' ').trim();
      const timeText = selectedTime.textContent.trim();

      alert(`Appointment booked for ${dayText} at ${timeText}`);
    });


    // Toggle navbar on mobile
    const toggleBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    });

    // signup === 

    document.getElementById('signupForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Account created successfully!');
    });

    
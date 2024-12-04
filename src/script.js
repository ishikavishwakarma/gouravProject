// script.js
function countdown() {
    const targetDate = new Date("2025-02-20T00:00:00").getTime(); // Set your target date here
    const now = new Date().getTime();
    const difference = targetDate - now;
  
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    } else {
      document.querySelector(".timer").innerHTML = "<h1>Countdown Finished!</h1>";
    }
  }
  
  // Update the timer every second
  setInterval(countdown, 1000);
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  menuButton.addEventListener('click', () => {
    // Toggle the hidden class on the mobile menu
    mobileMenu.classList.toggle('hidden');
    // Toggle visibility of menu icons
    menuIconOpen.classList.toggle('hidden');
    menuIconClose.classList.toggle('hidden');
  });

let confirmBookingMessage = document.querySelector('.confirm-booking');
let submitBookingButton = document.querySelector('#booking-button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let backdrop = document.querySelector('.backdrop');


toggleButton.addEventListener('click', function(){
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});

backdrop.addEventListener('click', function(){
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
});


submitBookingButton.addEventListener('click', function(){
  confirmBookingMessage.style.display = 'inline-block';
});
  

// variables for mobile navigation menu
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
let backdrop = document.querySelector('.backdrop');


// open menu in mobile view
toggleButton.addEventListener('click', function(){
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});

// close menu in mobile view
backdrop.addEventListener('click', function(){
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
});


  


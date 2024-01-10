let confirmBookingMessage = document.querySelector('.confirm-booking');
let submitBookingButton = document.querySelector('#booking-button');
let bookingName = document.querySelector('#full-name');
let bookingEmail = document.querySelector('#email');
let bookingPhone = document.querySelector('#phone');
let bookingPeopleNumber = document.querySelector('#people');
let bookingDate = document.querySelector('#bookDate');
let bookingTime = document.querySelector('#booking-time');


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

// submit booking form
submitBookingButton.addEventListener('click', function(){
  let name = checkFieldIsEmpty(bookingName);
  let email = checkFieldIsEmpty(bookingEmail);
  let phone = checkFieldIsEmpty(bookingPhone);
  let numOfPeople = checkFieldIsEmpty(bookingPeopleNumber);
  let date = checkFieldIsEmpty(bookingDate);
  let time = checkFieldIsEmpty(bookingTime);

  if(name && email && phone && numOfPeople && date && time){
    confirmBookingMessage.style.display = 'inline-block';
    bookingName.value = '';
  }
  
});
  
// check if fields are empty on submitting booking request
function checkFieldIsEmpty(inputField){
  let isSuccessful;

  if(!inputField.value){
    inputField.style.border = 'solid white 3px';
    isSuccessful = false;
  }
  else{
    inputField.style.border = 'none';
    isSuccessful = true;
  }
  return isSuccessful;
}

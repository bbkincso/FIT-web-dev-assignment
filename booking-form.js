//variables for booking form
let bookingForm = document.querySelector('.bookin-form');
let confirmBookingMessage = document.querySelector('.confirm-booking');
let submitBookingButton = document.querySelector('.booking-button');
let bookingName = document.querySelector('.full-name');
let bookingEmail = document.querySelector('.email');
 let bookingPhone = document.querySelector('.phone');
 let bookingPeopleNumber = document.querySelector('.group-size');
 let bookingDate = document.querySelector('.bookDate');
 let bookingTime = document.querySelector('.booking-time');
 let bookingMessage = document.querySelector('.booking-message');

 // // submit booking form
submitBookingButton.addEventListener('click', function(){
  let name = checkFieldIsEmpty(bookingName);
  let email = checkFieldIsEmpty(bookingEmail);
  let phone = checkFieldIsEmpty(bookingPhone);
  let numOfPeople = checkFieldIsEmpty(bookingPeopleNumber);
  let date = checkFieldIsEmpty(bookingDate);
  let time = checkFieldIsEmpty(bookingTime);

  if(name && email && phone && numOfPeople && date && time){
    confirmBookingMessage.style.display = 'inline-block';
    // bookingForm.submit();
    // bookingForm.reset();
    bookingName.value = '';
    bookingEmail.value = '';
    bookingPhone.value = '';
    bookingPeopleNumber.value = '';
    bookingDate.value = '';
    bookingTime.value = '';
    bookingMessage.value = '';
  }
});

 // //check if fields are empty on submitting booking request
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
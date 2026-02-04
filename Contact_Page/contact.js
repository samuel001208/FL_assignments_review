const form = document.getElementById('contact_form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstNameInputElem = document.getElementById('first_name_input').value.trim();
  const lastNameInputElem  = document.getElementById('last_name_input').value.trim();
  const emailInputEle      = document.getElementById('email_address').value.trim();
  const messageInputEle    = document.getElementById('massage').value.trim();
  const termsChecked       = document.getElementById('invalidCheck').checked;

  console.log(`Name: ${firstNameInputElem} ${lastNameInputElem}, Email: ${emailInputEle}, Message: ${messageInputEle}`);

  let hasError = false;

  // first name
  if (firstNameInputElem === ''){
    engage_error('first_name', 'Please enter your first name');
    hasError = true;
  } else if (firstNameInputElem.length < 2){
    engage_error('first_name', 'First name must be at least 2 characters long');
    hasError = true;
  } else if (!/^[A-Za-z]+$/.test(firstNameInputElem)){
    engage_error('first_name', 'First name must contain only letters');
    hasError = true;
  } else { 
    disable_error('first_name');
  }

  // last name
  if (lastNameInputElem === ''){
    engage_error('last_name', 'Please enter your last name');
    hasError = true;
  } else {
    disable_error('last_name');
  }

  // email
  if (emailInputEle === ''){
    engage_error('email_field', 'Please enter your email address');
    hasError = true;
  } else {
    disable_error('email_field');
  }

  // message
  if (messageInputEle === ''){
    engage_error('message_field', 'Please enter your message');
    hasError = true;
  } else {
    disable_error('message_field');
  }

  // terms
  if (!termsChecked){
    engage_error('terms_field', 'You must agree to the terms');
    hasError = true;
  } else {
    disable_error('terms_field');
  }

  if (hasError) return;

  alert('Form submitted successfully!');
});

function engage_error(inputElemId, message){
  const field = document.getElementById(inputElemId);
  const input = field.querySelector('input, textarea');
  if (input){
    input.classList.add('input-error');
    input.classList.remove('input-success');
  }
  const errorElem = field.querySelector('.error-message');
  if (errorElem){
    errorElem.textContent = message;
    errorElem.classList.add('error-text');
  }
}

function disable_error(inputElemId){
  const field = document.getElementById(inputElemId);
  const input = field.querySelector('input, textarea');
  if (input){
    input.classList.remove('input-error');
    input.classList.add('input-success');
  }
  const errorElem = field.querySelector('.error-message');
  if (errorElem){
    errorElem.textContent = "";
    errorElem.classList.remove('error-text');
  }
}

import throttle from 'lodash.throttle';

const KEY = 'feedback-form-state';

const input = {};

const inputForm = document.querySelector('.feedback-form');
 
inputForm.addEventListener('input', throttle(newInput, 500));   
    
function newInput(event) {
    input.email = inputForm.elements.email.value;
    input.message = inputForm.elements.message.value;
    localStorage.setItem(KEY, JSON.stringify(input));
}
 
updatePage();

function updatePage() {
    
    const savedData = localStorage.getItem(KEY);

    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        inputForm.email.value = email;
        inputForm.message.value = message;
    }
}

inputForm.addEventListener('submit', onFormSubmit);  

function onFormSubmit(event) {
  event.preventDefault();

    console.log({
        email: inputForm.email.value,
        message: inputForm.message.value
    });

    event.currentTarget.reset();
  localStorage.removeItem(KEY);
}

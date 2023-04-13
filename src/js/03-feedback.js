import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGEKEY = "feedback-form-state";

saveSettings();

form.addEventListener('input', throttle(onInput),500);

form.addEventListener('submit',onSubmit);

function onInput(evt){
    const {email:emailEvt, message:messageEvt} = evt.currentTarget.elements;

    const objectForm = {
        email:emailEvt.value,
        message:messageEvt.value};

    const setLocalStorage = function (objectForm){
        localStorage.setItem(STORAGEKEY, JSON.stringify(objectForm));
    }
    setLocalStorage(objectForm);

}

function onSubmit(evt){
    evt.preventDefault();
    const {
        elements: { email, message }
        } = evt.currentTarget;

      if (!email.value || !message.value) {
        return console.log('Заповніть всі поля');
      }
    const objectFormEvent = JSON.parse(localStorage.getItem(STORAGEKEY));

    console.log(objectFormEvent);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGEKEY);

}

function saveSettings(){
    const {email, message} = JSON.parse(localStorage.getItem(STORAGEKEY)) || {}; 

    if (email){form.email.value = email};
        
    if (message){form.message.value = message};
    

}
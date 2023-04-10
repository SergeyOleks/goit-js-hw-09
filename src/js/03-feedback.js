import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const objectForm = {
    email:'',
    message:''
};

form.addEventListener('input',onInput);

form.addEventListener('submit',onSubmit);

function onInput(evt){

    if (evt.target.name==='email'){
        objectForm.email=evt.target.value;

    }else if (evt.target.name==='message'){
        objectForm.message=evt.target.value;
    };

    const setLocalStorage = function (objectForm){
        localStorage.setItem("feedback-form-state", JSON.stringify(objectForm))
    }
    throttle(setLocalStorage(objectForm),500);
}

function onSubmit(evt){
    evt.preventDefault();
    const objectForm = JSON.parse(localStorage.getItem('feedback-form-state'));

    console.log(objectForm);
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");

}
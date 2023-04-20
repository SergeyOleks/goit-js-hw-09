import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayInput = document.querySelector('input[name=delay]');
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');
const btnSubmit = document.querySelector('button');
const form = document.querySelector(".form");


form.addEventListener('submit', onStart);

function onStart(evt){
  evt.preventDefault();

  let {amount:{value:amount}, delay:{value:delay}, step:{value:step}} = evt.target.elements;

  amount = Number(amount); 
  delay = Number(delay);
  step = Number(step);
 
 for (let i = 1; i<=amount; i+=1){    
    setTimeout(()=>{
      const delayStep = delay+step*(i-1); 
      const promise = createPromise(i, delayStep);
      promise
        .then(value=>Notify.success(value))
        .catch(err=>Notify.failure(err));
    }, delay);
 }


function createPromise(position, delay) {
  return new Promise((res, rej)=>{
    const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        res(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        rej(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    })
  }

}
 
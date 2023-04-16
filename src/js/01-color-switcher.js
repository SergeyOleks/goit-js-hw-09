 const btnStart = document.querySelector("button[data-start]");
 const btnStop = document.querySelector("button[data-stop]");
 const body = document.querySelector('body');

 btnStart.addEventListener('click',()=>{
    timerId = setInterval(()=>{
        btnStart.disabled = true;
        body.style.backgroundColor = getRandomHexColor();
    }, 1000
    )
 });

 btnStop.addEventListener('click', ()=>{
    clearInterval(timerId);
    btnStart.disabled = false;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };
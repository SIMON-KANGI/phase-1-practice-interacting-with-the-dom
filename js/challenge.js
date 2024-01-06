let counterCont = document.getElementById('counter');
let counter = 0;//new count
let form =document.getElementById('comment-form')
let input=document.getElementById('comment-input')
let submit=document.getElementById('submit')
let interval;
let windStatus = "started"; //defines the status of the counter
function windowCount() {
    
    if(windStatus==="started"){ //set the condition of the window
         counter++;
      counterCont.innerText = counter; 
    }
   
      
    
}

// Set interval initially
interval=window.setInterval(windowCount, 1000);

let minCount = document.getElementById('minus');
let addCount = document.getElementById('plus');
let pauseBtn = document.getElementById('pause');

minCount.addEventListener('click', () => {
    counter--;
    counterCont.innerText = counter;
});

addCount.addEventListener('click', () => {
    counter++;
    counterCont.innerText = counter;
});

pauseBtn.addEventListener('click', () => {
    if(windStatus==="stopped"){
        interval=window.setInterval(windowCount, 1000);
        pauseBtn.innerHTML="pause"
        windStatus="started";
        console.log('windStatus:', windStatus);
        minCount.disabled=false;
addCount.disabled=false;
liker.disabled=false;
form.ariaDisabled=false;   //enable the buttons
input.disabled=false;
submit.disabled=false;
        }else{
window.clearInterval(interval)
pauseBtn.innerHTML="resume";
windStatus="stopped"
minCount.disabled=true
addCount.disabled=true;
liker.disabled=true;       // disable the buttons
input.disabled=true;
submit.disabled=true;
console.log('windStatus:', windStatus);
    }
});





//like function
let liker=document.getElementById('heart')

liker.addEventListener('click', ()=>{
let likeCont=document.querySelector('.likes')
let list=document.createElement('li')
list.innerHTML=counter + " has been liked 1 time"
likeCont.appendChild(list)
})

//comments function


form.addEventListener('submit', (e)=>{
    e.preventDefault()
getComments(e.target.querySelector('#comment-input').value)
})

function getComments(commenting){
let comment=document.querySelector('.comments')
let p=document.createElement('p')
p.innerHTML=commenting
comment.appendChild(p)
}

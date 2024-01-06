let counterCont = document.getElementById('counter');
let counter = 0;//new count
let interval = null;
let windStatus = "stopped";

function windowCount() {
    counter++;
    counterCont.innerText = counter; //set the new count
}

// Set interval initially
window.setInterval(windowCount, 1000);

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
    if (windStatus === "stopped") {
        interval = window.setInterval(windowCount, 1000);
        pauseBtn.innerHTML = "pause";
        windStatus = "started";
    } else {
        window.clearInterval(interval);
        pauseBtn.innerHTML = "resume";
        windStatus = "stopped";
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
let form =document.getElementById('comment-form')

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
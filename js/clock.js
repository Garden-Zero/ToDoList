const clock = document.querySelector("#clock");

//get time by using Date object
//set it in 2 letters by using padStart
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//call getClock per 1sc by using setInterval
getClock();
setInterval(getClock, 1000);
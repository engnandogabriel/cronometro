const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const reset = document.querySelector("#reset");
const actions = document.querySelector('.actions');
const hoursTime = document.querySelector('#hours');
const minutesTime = document.querySelector('#minutes');
const secondsTime = document.querySelector('#seconds');

//controler
let isPaused; 
let hour = 0;
let minutes = 0;
let seconds = 0;
let interval;

const formatTime = (time) => {
    return time < 10? `0${time}` : time;
}



const startTimer = () => {
    interval = setInterval(() => {
        seconds++;
        if(seconds === 60){
            minutes++;
            seconds = 0;
        }
        if(minutes === 60){
            hour++;
            minutes = 0;
        }
        
        hoursTime.innerHTML = formatTime(hour);
        minutesTime.innerHTML = formatTime(minutes);
        secondsTime.innerHTML = formatTime(seconds);
        
    },1000);
}

const pauseTimer = () => {
    clearInterval(interval)
    
    
}

const resetTimer = () => {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hour = 0;
    hoursTime.innerHTML = '00'
    minutesTime.innerHTML = '00'
    secondsTime.innerHTML = '00'

}

start.addEventListener('click', startTimer);

pause.addEventListener('click', pauseTimer);

reset.addEventListener('click', resetTimer);
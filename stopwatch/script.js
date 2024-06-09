
function start(){
    if(!isRunning){
        startTime = Date.now()-timeElapsed;
        timer = setInterval(update ,10);
        isRunning = true;
    }
}
function stopp(){
    if(isRunning){
        clearInterval(timer)
        timeElapsed = Date.now() - startTime
        isRunning = false;
    }
} 
function reset(){
    clearInterval(timer);
    timeElapsed = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}
function update(){
    let currenttime = Date.now()
    let timeElapsed = currenttime - startTime
    let hour = Math.floor(timeElapsed / (1000 * 60 * 60 ))
    let min = Math.floor(timeElapsed / (1000 * 60  )%60)
    let second = Math.floor(timeElapsed / (1000 )%60)
    let mili = Math.floor(timeElapsed %1000 / 10)
    mili = String(mili).padStart(2 , "0")
    hour = String(hour).padStart(2 , "0")
    min = String(min).padStart(2 , "0")
    second = String(second).padStart(2 , "0")
    display.textContent = `${hour}:${min}:${second}:${mili}`
}

let display = document.getElementById("timer")
let startTime = 0;
let timeElapsed = 0;
let isRunning = false;
let timer = null;
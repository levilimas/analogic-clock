const HOURPOINTER = document.querySelector("#hour");
const MINUTEPOINTER = document.querySelector("#minute");
const SECONDPOINTER = document.querySelector("#second");

var date = new Date();
console.log(date);

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hora: " + hr + " Minuto: " + min + " Secundo: " + sec);

let positionHr = (hr*360/12)+(min*(360/60)/12);
let positionMin = (min*360/60)+(sec*(360/60)/60);
let positionSec = sec*360/60;

function executarRelogio() {
    positionHr = positionHr+(3/360);
    positionMin = positionMin+(6/60);
    positionSec = positionSec+6;

    HOURPOINTER.style.transform = "rotate(" + positionHr + "deg)";
    MINUTEPOINTER.style.transform = "rotate(" + positionMin + "deg)";
    SECONDPOINTER.style.transform = "rotate(" + positionSec + "deg)";
}

var intervalo = setInterval(executarRelogio, 1000);

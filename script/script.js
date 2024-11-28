let hour = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

function time(){
let date = new Date();


let handHr = date.getHours();
let handMin = date.getMinutes();
let handSec = date.getSeconds();


let hrHandPlace = 30 * handHr + handMin/2;
let minHandPlace = 6 * handMin;
let secHandPlace = 6 * handSec;



hour.style.transform = `rotate(${hrHandPlace}deg)`;
min.style.transform = `rotate(${minHandPlace}deg)`;
sec.style.transform = `rotate(${secHandPlace}deg)`;
}

setInterval(time, 1000);
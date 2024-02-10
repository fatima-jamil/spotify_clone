let main = document.querySelector(".main-content");
main.addEventListener("wheel",(event)=> {
    
    let head = document.querySelector(".sticky-nav");
    if(event.deltaY > 0){
        head.style.backgroundColor = "#121212ff";
    } else if(event.deltaY < 0){
        head.style.backgroundColor = "#21212100";
    }
})


let songLengthMin = 3;
let songLengthSec = 23;


let range = document.querySelector(".song-range");
range.addEventListener("input", () =>{
    let val = range.value;
    let pstart = document.querySelector(".curr-time");
    let pend = document.querySelector(".tot-time");
    let line = document.querySelector(".line");
    line.style.width = val + "%";
    let totalSec = songLengthMin*60 + songLengthSec;
    let currentSec = Math.round(val/100 * totalSec);
    let sec = currentSec % 60;
    let min = Math.floor(currentSec / 60);
    pstart.innerText = min + ":" + sec;
    pend.innerText = songLengthMin + ":" + songLengthSec;
})

let rang = document.querySelector(".range-outer")
rang.onmouseover = () =>{
    let line = document.querySelector(".line");
    line.style.backgroundColor = "rgb(74, 205, 74)";
    range.style.overflow = "visible";
}
rang.onmouseout = () =>{
    let line = document.querySelector(".line");
    line.style.backgroundColor = "white";
    range.style.overflow = "hidden";
}






let volrange = document.querySelector(".vol-range");
volrange.addEventListener("input", () =>{
    let val = volrange.value;
    let line = document.querySelector(".vol-line");
    line.style.width = val + "%";
})
let volrang = document.querySelector(".vol-outer")
volrang.onmouseover = () =>{
    let line = document.querySelector(".vol-line");
    line.style.backgroundColor = "rgb(74, 205, 74)";
    volrange.style.overflow = "visible";
}
volrang.onmouseout = () =>{
    let line = document.querySelector(".vol-line");
    line.style.backgroundColor = "white";
    volrange.style.overflow = "hidden";
}
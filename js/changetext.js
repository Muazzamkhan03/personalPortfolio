let textbox = document.querySelector(".quality");

let qualities = ["Software Engineering student", "Programmer", "Web Developer"];
let i = 0; 

setInterval(()=>{
    let word = qualities[i];
    textbox.innerText = word;
    i = (i+1)%3;
}, 1100);


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const names = document.querySelector(".name");

window.onload = (e)=>{
    let iterations = 0; 

    const internval = setInterval(()=>{
        names.innerText = names.innerText.split("").map((letter, index)=>{
            
            if(index < iterations){
                return names.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
        }).join("");

        if(iterations > names.dataset.value.length){
            clearInterval(internval);
        }

        iterations += 1/3;
    }, 30);
};


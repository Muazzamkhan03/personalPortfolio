// FUNCTIONS

const jumble = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const names = document.querySelector(".name");

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
}

const isElementInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

const handleScroll = () => {
    const main = document.querySelector("#main");

    if (isElementInViewport(main)) {
        jumble();
    }
}

// EVENT LISTENERS

window.onload = jumble();
window.addEventListener('scroll', handleScroll);
let videos = document.querySelectorAll(".project-video");

Array.from(videos).map((i)=>{
    i.addEventListener('click', (e)=>{
        if(e.target.paused){
            e.target.play();
        }
        else{
            e.target.pause();
        }
    })
})
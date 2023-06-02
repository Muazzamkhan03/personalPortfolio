const InViewport = (section) => {
    
    var rect = section.getBoundingClientRect();
    var threshold = 0.2; 

  return (
    rect.bottom >= threshold * window.innerHeight &&
    rect.top <= (1 - threshold) * window.innerHeight
  );
}
  



window.addEventListener('scroll', ()=>{
      
    if(InViewport(document.querySelector('#about'))) {
        document.querySelector('.content').classList.add('show');
        document.querySelector('.sideImage').classList.add('show');
    }
    else {
        document.querySelector('.content').classList.remove('show');
        document.querySelector('.sideImage').classList.remove('show');
    }

    if(InViewport(document.querySelector('#skills'))){
        document.querySelector('#skills h1').classList.add('show');
        document.querySelector('.grid').classList.add('show');
    }
    else{
        document.querySelector('#skills h1').classList.remove('show');
        document.querySelector('.grid').classList.remove('show');

    }

    if(InViewport(document.querySelector('#projects'))){
        document.querySelector('.articles-section').classList.add('show-project');
    }
    else{
        document.querySelector('.articles-section').classList.remove('show-project');
    }
    
  });
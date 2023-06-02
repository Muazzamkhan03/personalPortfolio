const InViewport = (section) => {
    
    var rect = section.getBoundingClientRect();
    var threshold = 0.2; 

  return (
    rect.bottom >= threshold * window.innerHeight &&
    rect.top <= (1 - threshold) * window.innerHeight
  );
}
  



window.addEventListener('scroll', ()=>{
      
    if(InViewport(document.querySelector('#main'))) {
        document.querySelector('.home-btn').classList.add('active');
    }
    else {
        document.querySelector('.home-btn').classList.remove('active');
    }

    if(InViewport(document.querySelector('#about'))) {
        document.querySelector('.content').classList.add('show');
        document.querySelector('.sideImage').classList.add('show');
        document.querySelector('.about-btn').classList.add('active');
    }
    else {
        document.querySelector('.content').classList.remove('show');
        document.querySelector('.sideImage').classList.remove('show');
        document.querySelector('.about-btn').classList.remove('active');
    }
    
    if(InViewport(document.querySelector('#skills'))){
        document.querySelector('#skills h1').classList.add('show');
        document.querySelector('.grid').classList.add('show-special');
        document.querySelector('.skills-btn').classList.add('active');
    }
    else{
        document.querySelector('#skills h1').classList.remove('show');
        document.querySelector('.grid').classList.remove('show-special');
        document.querySelector('.skills-btn').classList.remove('active');
        
    }
    
    if(InViewport(document.querySelector('#projects'))){
        document.querySelector('.articles-section').classList.add('show-special');
        document.querySelector('.projects-btn').classList.add('active');
    }
    else{
        document.querySelector('.articles-section').classList.remove('show-special');
        document.querySelector('.projects-btn').classList.remove('active');
    }

    if(InViewport(document.querySelector('#contact'))){
        document.querySelector('.contact-btn').classList.add('active');
    }
    else{
        document.querySelector('.contact-btn').classList.remove('active');
    }
    
  });
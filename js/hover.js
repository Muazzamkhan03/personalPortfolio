const home = document.querySelector(".home-btn");
const about = document.querySelector(".about-btn");
const skills = document.querySelector(".skills-btn");
const projects = document.querySelector(".projects-btn");
const contact = document.querySelector(".contact-btn");

// Home start 
home.addEventListener('mouseover',(e)=>{
    home.innerHTML = 'Home';
});

home.addEventListener('mouseout',(e)=>{
    home.innerHTML = '<i class="fa-solid fa-house"></i>';
});
// Home end 

// About start 
about.addEventListener('mouseover',(e)=>{
    about.innerHTML = 'About';
});

about.addEventListener('mouseout',(e)=>{
    about.innerHTML = '<i class="fa-regular fa-user"></i>';
});
// About end 

// Skills start 
skills.addEventListener('mouseover',(e)=>{
    skills.innerHTML = 'Skills';
});

skills.addEventListener('mouseout',(e)=>{
    skills.innerHTML = '<i class="fa-solid fa-screwdriver-wrench">';
});
// Skills end 

// Projects start 
projects.addEventListener('mouseover',(e)=>{
    projects.innerHTML = 'Projects';
});

projects.addEventListener('mouseout',(e)=>{
    projects.innerHTML = '<i class="fa-regular fa-eye"></i>';
});
// Projects end 

// Contact start 
contact.addEventListener('mouseover',(e)=>{
    contact.innerHTML = 'Contact';
});

contact.addEventListener('mouseout',(e)=>{
    contact.innerHTML = '<i class="fa-regular fa-envelope"></i>';
});
// Contact end 
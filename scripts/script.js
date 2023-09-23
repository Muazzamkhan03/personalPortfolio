const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab)=>{
    tab.addEventListener("click",()=>{
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('active-tab');
        });
        tabs.forEach(tabContent=>{
            tabContent.classList.remove('active-tab');
        });
        target.classList.add('active-tab');
        tab.classList.add('active-tab');
    });
});
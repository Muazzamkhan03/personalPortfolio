let activeIndex = 0;

const articlesSection = document.querySelectorAll(".articles-section article");

const rightClick = () => {
    const nextIndex = activeIndex + 1 <= articlesSection.length - 1 ? activeIndex + 1 : 0;
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentArticle.dataset.status = "after";
    
    nextArticle.dataset.status = "becoming-active-from-before";
    
    setTimeout(()=>{
        nextArticle.dataset.status = "active";
        activeIndex = nextIndex;
    });
}

const leftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : articlesSection.length - 1;
    const currentArticle = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextArticle = document.querySelector(`[data-index="${nextIndex}"]`);
    
    currentArticle.dataset.status = "before";
    
    nextArticle.dataset.status = "becoming-active-from-after";
    
    setTimeout(()=>{
        nextArticle.dataset.status = "active";
        activeIndex = nextIndex;
    });
}
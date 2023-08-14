document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    
        return (
            rect.top <= windowHeight * 0.85 && 
            rect.bottom >= windowHeight * 0.15 && 
            rect.left >= 0 && 
            rect.right <= windowWidth  
        );
    }
    

    function displayOnScroll() {
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.remove('hidden');
            }
            else {
                element.classList.add('hidden');
            }
        });
    }

    window.addEventListener('scroll', displayOnScroll);
    displayOnScroll(); 
});

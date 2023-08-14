/**
 * Class representing a scroll fade effect.
 */
class ScrollFade {
    constructor(elements, topFactor=0.88, bottomFactor=0.12) {
        this.elements = elements
        this.topFactor = topFactor
        this.bottomFactor = bottomFactor
        this.init()
    }

    /**
     * Check if the given element is in the viewport.
     * @param {Element} element - The DOM element to check.
     * @return {boolean} - Returns true if the element is in the viewport, otherwise false.
     */
    isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

        const calculateElementPosition = (top, bottom, left, right) => {
            return (
                top <= windowHeight * this.topFactor &&
                bottom >= windowHeight * this.bottomFactor &&
                left >= 0 && right <= windowWidth
            );
        };
    
        return calculateElementPosition(rect.top, rect.bottom, rect.left, rect.right);
    }

     /**
     * Apply the fade effect based on scroll position.
     */
    displayOnScroll() {
        this.elements.forEach(element => {
            if (this.isElementInViewport(element)) {
                element.classList.remove('hidden'); 
    
                if (element.classList.contains('from-left')) {
                    element.classList.add('active'); 
                }
            } 
            else {
                element.classList.add('hidden');
    
                if (element.classList.contains('from-left')) {
                    element.classList.remove('active');
                }
            }
        });
    }

     /**
     * Initialize the scroll fade effect.
     */
    init() {
        window.addEventListener('scroll', this.displayOnScroll.bind(this));
        this.displayOnScroll();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ScrollFade(document.querySelectorAll('.fade, .from-left'));
});
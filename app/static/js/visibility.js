class ScrollFade {
    constructor(elements, topFactor=0.85, bottomFactor=0.15) {
        this.elements = elements
        this.topFactor = topFactor
        this.bottomFactor = bottomFactor
        this.init()
    }

    isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

        const calculateElementPosition = (top, bottom, left, right) => {
            return (
                top <= windowHeight * this.topFactor &&
                bottom >= windowHeight * this.bottomFactor &&
                left >= 0 &&
                right <= windowWidth
            );
        };
    
        return calculateElementPosition(rect.top, rect.bottom, rect.left, rect.right);
    }

    displayOnScroll() {
        this.elements.forEach(element => {
            if (this.isElementInViewport(element)) {
                element.classList.remove('hidden');
            }
            else {
                element.classList.add('hidden');
            }
        });
    }

    init() {
        window.addEventListener('scroll', this.displayOnScroll.bind(this));
        this.displayOnScroll();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ScrollFade(document.querySelectorAll('.fade'));
});

(function() {
    
    // Set the initial slide index.
    let slideIndex = 0;

    /**
     * Bind click event listener to a slider button.
     * @param {string} buttonId - The ID of the button ('next' or 'prev').
     */
    function bindSliderButton(buttonId) {
        document.getElementById(buttonId).addEventListener('click', () => {
            // Increment or decrement the slide index based on the button clicked.
            slideIndex += (buttonId === 'next') ? 1 : -1;
            updateSlider();
        });
    }

    /**
     * Update the position of the slider based on the current slide index.
     */
    function updateSlider() {
        const list = document.querySelector(".nav-list");
        const items = document.querySelectorAll('.nav-items');

        // Ensure slide index is within bounds.
        const maxSlideIndex = items.length - 3;
        slideIndex = Math.max(0, Math.min(slideIndex, maxSlideIndex));

        // Calculate percentage to translate the slider.
        const percentage = slideIndex * (100 / items.length);
        list.style.transform = `translateX(-${percentage}%)`;
    }

    /**
     * Bind click event listener to an element to open/close the info sidebar.
     * @param {string} elementId - The ID of the element to bind the click event to.
     */
    function toggleInfoSidebar(elementId) {
        document.getElementById(elementId).addEventListener('click', () => {
            const sidebar = document.getElementById('info-sidebar');
            // Toggle sidebar width between 0 and 25rem.
            sidebar.style.width = (sidebar.style.width === '0px') ? '25rem' : '0px';
        });
    }

    // Bind the slider buttons.
    bindSliderButton('next');
    bindSliderButton('prev');

    // Bind the open/close actions for the info sidebar.
    toggleInfoSidebar('help-icon');
    toggleInfoSidebar('close-icon');

});


let slideIndex = 0;

document.getElementById('next').addEventListener('click', function() {
    slideIndex += 1;
    updateSlider();
});

document.getElementById('prev').addEventListener('click', function() {
    slideIndex -= 1;
    updateSlider();
});

function updateSlider() {
    let list = document.querySelector(".nav-list");
    let items = document.querySelectorAll('.nav-items');
    let maxSlideIndex = items.length - 3;

    slideIndex = Math.max(0, Math.min(slideIndex, maxSlideIndex)); 
    let percentage = slideIndex * (100 / items.length); 
    list.style.transform = `translateX(-${percentage}%)`;
}


function openCloseInfoPage(elementId) {
    document.getElementById(elementId).addEventListener('click', function() {
        let sidebar = document.getElementById('info-sidebar');
        if (sidebar.style.width === '0px') {
            sidebar.style.width = '25rem';
        }
        else {
            sidebar.style.width = '0px';
        }
    });
}

openCloseInfoPage('help-icon');
openCloseInfoPage('close-icon');
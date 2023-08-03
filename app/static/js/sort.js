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
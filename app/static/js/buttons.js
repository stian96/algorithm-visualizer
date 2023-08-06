const BUTTON_IDS = ['sort-btn', 'search-btn', 'traverse-btn'];

async function getPageEndpoints() {
    try {
        const url = '/page-urls';
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }
    catch(error) {
        console.log('A problem occurred while fetching page-urls: ', error);
        return [];
    }
}

function addEventListenerForButton(buttonId, url) {
    let button = document.getElementById(buttonId);

    if (button) {
        button.addEventListener('click', () => {
            window.location.href = url;
        });
    }
}

(async function setupButton() {
    let endpoint = await getPageEndpoints();

    for (let i = 0; i < Math.min(endpoint.length, BUTTON_IDS.length); i++) {
        addEventListenerForButton(BUTTON_IDS[i], endpoint[i]);
    }
})();

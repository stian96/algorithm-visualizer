function resetBackgroundColors(elements) {
    for (let item of elements) {
        item.style.backgroundColor = '';
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function addEventListenerForSearch(elementId, url) 
{
    document.getElementById(elementId).addEventListener('click', async function() 
    {
        let element = document.getElementById('element').value;

        console.log(`Element to search for: ${element}`);
        let steps = await getSearchResult(url, element);
        let listItems = document.querySelectorAll('.flex-item');

        for (let step of steps) {
            let listItem = Array.from(listItems).find(item => item.textContent === step.value.toString());

            if (listItem) {
                listItem.style.backgroundColor = step.found ? '#a5e99e' : 'rgb(248, 110, 110)';
            }
            // Wait 1 secound before the next step.
            await sleep(1000);
        }
        await sleep(2000)
        resetBackgroundColors(listItems)
    });
}

// Function to get the search result from the backend code.
async function getSearchResult(url, element) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({element: element})
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        if (!data.hasOwnProperty('steps')) {
            throw new Error("Missing 'steps' key in response.");
        }
        return data['steps'];
    } 
    catch(error) {
        console.log('A problem occurred while fetching the search steps:', error);
    }
}


// Add event listeners for different search algorithms.
addEventListenerForSearch('linear-search', '/linear-search');
// addEventListenerForSearch('binary-search', '/binary-search');
// addEventListenerForSearch('recursive-search', '/recursive-search');
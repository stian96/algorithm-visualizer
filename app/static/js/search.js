function addEventListenerForSearch(elementId, url) {
    document.getElementById(elementId).addEventListener('click', async function() {
        let element = document.getElementById('element').value;
        let result = await getSearchResult(url, element);
        console.log(result);

        // Use this result to visualize the algorithm.

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
        if (!data.hasOwnProperty('result')) {
            throw new Error("Missing 'result' key in response.");
        }
        return data['result'];
    } 
    catch(error) {
        console.log('A problem occurred while fetching the search result:', error);
    }
}

// Add event listeners for different search algorithms.
addEventListenerForSearch('linear-search', '/linear-search');
addEventListenerForSearch('binary-search', '/binary-search');
addEventListenerForSearch('recursive-search', '/recursive-search');
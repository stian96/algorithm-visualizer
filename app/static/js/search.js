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

function addEventListenerForSearch(elementId, url) {
    document.getElementById(elementId).addEventListener('click', async function() {
        let element = document.getElementById('element').value;
        let result = await getSearchResult(url, element);
        console.log(result);

        // Use this result to visualize the algorithm.

    });
}
const container = document.querySelector('.sorting-visualization');
const data = [34, 56, 12, 89, 43];

data.forEach((number, index) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = `${number}px`;
    bar.style.left = `${index * 12}px`;
    container.appendChild(bar);
});

async function getSortingSteps(algorithmType) {
    try {
        const url = `/sort/${algorithmType}`;
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await respons.json();
        if (!data.hasOwnProperty('steps')) {
            throw new Error("Missing 'steps' key in response.");
        }
        return data['steps'];
    }
    catch(error) {
        console.log('A problem occurred while fetching the sorting steps', error);
    }
}
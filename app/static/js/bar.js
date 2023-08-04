let originalOrder;
const container = document.querySelector('.bar-container');

async function visualizeSorting(algorithmType, values) {
    try {
        const steps = await getSortingSteps(algorithmType, values);

        // Loop through each step with a delay to visualize sorting.
        for (const step of steps) {
            clearBars();
            render_steps(step);
            await new Promise(r => setTimeout(r, 100));
        }
    }
    catch(error) {
        console.log('A problem occurred while visualizing the sorting', error);
    }
}

async function getSortingSteps(algorithmType, values) {
    try {
        const url = `/sort/${algorithmType}`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ values }),
        };
        let response = await fetch(url, options);
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
        console.log('A problem occurred while fetching the sorting steps', error);
    }
}

function render_steps(step) {
    step.forEach((number, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${number * 2.5}px`;
        bar.style.left = `${index * 40}px`;
        container.appendChild(bar);
    });
}

function clearBars() {
    container.innerHTML = '';
}

async function getDiagramValues(endpoint) {
    try {
        const url = endpoint;
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        return Object.values(data);
    }
    catch(error) {
        console.log('There was a problem in fetching the data for the diagram:', error);
    }
}

async function initializeBars() {
    const initialValues = await getDiagramValues('/diagram-values');
    originalOrder = [...initialValues];
    
    render_steps(initialValues);
    chooseAlgorithmToRun('bubble-sort', originalOrder);
    chooseAlgorithmToRun('selection-sort', originalOrder);
}

function resetBars() {
    clearBars();
    render_steps(originalOrder);
}

window.onload = function() {
    initializeBars();
}

document.getElementById('reset').addEventListener('click', function() {
    resetBars();
});

function chooseAlgorithmToRun(elementId, array) {
    document.getElementById(elementId).addEventListener('click', async function() {
        visualizeSorting(elementId.replace(/-/g, '_'), array);
    });
}



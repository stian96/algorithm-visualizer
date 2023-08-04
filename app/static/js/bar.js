
const container = document.querySelector('.bar-container');

async function visualizeSorting(algorithmType) {
    try {
        const steps = await getSortingSteps(algorithmType);

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

async function getSortingSteps(algorithmType) {
    try {
        const url = `/sort/${algorithmType}`;
        let response = await fetch(url);
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
        bar.style.height = `${number * 2}px`;
        bar.style.left = `${index * 40}px`;
        container.appendChild(bar);
    });
}

function clearBars() {
    container.innerHTML = '';
}

document.getElementById('bubble-sort').addEventListener('click', async function() {
    visualizeSorting('bubble_sort');
});
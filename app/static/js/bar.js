// Constant definitions for algorithms and DOM-elements.
const ALGORITHMS = ['bubble-sort', 'selection-sort', 'insertion-sort', 'quick-sort', 'merge-sort', 'heap-sort'];
const CONTAINER = document.querySelector('.bar-container');
let originalOrder;

/**
 * 
 * @param {string} algorithmType - Type of sorting algorithm. 
 * @param {Array} values - Array of values to be sorted. 
*/
async function visualizeSorting(algorithmType, values) {
    try {
        const steps = await getSortingSteps(algorithmType, values);
            
        // Animate each step with a delay for the visualization.
        for (const step of steps) {
            clearBars();
            renderSteps(step);
            await new Promise(r => setTimeout(r, getDelay()));
        }
    } 
    catch (error) {
        logError('A problem occurred while visualizing the sorting', error);
    }
}

/**
* Gets sortingsteps from the server for a given algorithm type and values.
* @param {string} algorithmType - Type of sorting algorithm.
* @param {Array} values - Array values to be sorted.
* @returns {Array} - A list of steps for sorting. 
*/
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
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (!data.hasOwnProperty('steps')) {
            throw new Error("Missing 'steps' key in response.");
        }

        return data['steps'];
    } 
    catch (error) {
        logError('A problem occurred while fetching the sorting steps', error);
    }
}

/**
* Render bars for each step during visualization.
* @param {Array} step - Simple sortingstep that contains the number in a determine order.
*/
function renderSteps(step) {
    step.forEach((number, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${number * 2.5}px`;
        bar.style.left = `${index * 40}px`;
        CONTAINER.appendChild(bar);
    });
}

/**
* Removes all bars from the container to prepare for the next render.
*/
function clearBars() {
    CONTAINER.innerHTML = '';
}

/**
* Gets values for the diagram from a particular endpoint.
* @param {string} endpoint - URL to the server to get the values.
* @returns {Array} - A list of values for the diagram.
*/
async function getDiagramValues(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return Object.values(data);
    } 
    catch (error) {
        logError('There was a problem in fetching the data for the diagram:', error);
    }
}

/**
* Initialize the bars and bind event listeners to the sorting buttons.
*/
async function initializeBars() {
    const initialValues = await getDiagramValues('/diagram-values');
    originalOrder = [...initialValues];

    renderSteps(initialValues);
    bindAlgorithms(originalOrder);
}

/**
* Binds the sorting algorithms to their respective buttons. 
* @param {Array} values - Original values off the bars.
*/
function bindAlgorithms(values) {
    ALGORITHMS.forEach(element => {
        chooseAlgorithmToRun(element, values);
    });
}

/**
* Bind a spesific algorithm to a button and starts visualization when clicked.
* @param {string} elementId - ID to the button.
* @param {Array} array - Values to be sorted.
*/
function chooseAlgorithmToRun(elementId, array) {
    document.getElementById(elementId).addEventListener('click', async () => {
        visualizeSorting(elementId.replace(/-/g, '_'), array);
    });
}

/**
* Resets the bars to their original order. 
*/
function resetBars() {
    clearBars();
    renderSteps(originalOrder);
}

/**
 * Gets the correct delay from the animation slider. 
 * @returns The delay value to be used in the visualization.
 */
function getDelay() {
    return Number(document.getElementById('speed').value);
}

/**
* Logs error messages to the browser console.
* @param {string} message - Error message. 
* @param {Error} error - Error object.
*/
function logError(message, error) {
    console.log(message, error);
}

/**
 * Adjusts the background color of the slider based on its value.
 * The slider's color will transition from green (#a5e99e) to white (#ffffff)
 * depending on its current position.
 */
function adjustSliderColor() {
    let slider = document.getElementById('speed');
    slider.addEventListener('input', function() {
        let value = calculateSliderValue(slider);
        slider.style.background = `linear-gradient(to right, #a5e99e ${value}%, #ffffff ${value}%)`;
    });
}

/**
 * Calculate the slider's position as a percentage.
 * 
 * @param {HTMLInputElement} slider - The input slider element.
 * @returns {number} The position of the slider as a percentage of its range.
 */
function calculateSliderValue(slider) {
    return ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
}

/**
* Start the function when the document is loaded.
*/
window.onload = () => {
    initializeBars();
    adjustSliderColor();
}
document.getElementById('reset').addEventListener('click', () => resetBars());
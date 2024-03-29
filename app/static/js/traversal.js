// Function that highlights a specific node with a delay.
// It changes the background color of the node to the given color (default is 'rgb(248, 110, 110)').
// After the delay, it resolves the Promise.
function highlightNodesWithDelay(nodeValue, color = 'rgb(248, 110, 110)') {
    return new Promise(resolve => {
        setTimeout(() => {
            try {
                let node = document.getElementById('node-' + nodeValue);
                if (!node) {
                    throw new Error(`Node with value ${nodeValue} not found.`);
                }
                node.style.backgroundColor = color;
                node.classList.add('node-highlighted');
                setTimeout(() => node.classList.remove('node-highlighted'), 500);
            } catch (error) {
                console.error('A problem occurred while highlighting the node:', error);
            }
            resolve();
        }, getDelay())
    });
}

// Function to get the delay value from the 'speed' HTML element.
function getDelay() {
    return Number(document.getElementById('speed').value);
}

// Asynchronous function that highlights nodes in the order provided as an argument.
// It iteratively highlights each node with a delay, and resets colors after highlighting all nodes.
async function highlightNodesInOrder(order) {
    try {
        for (let i = 0; i < order.length; i++) {
            await highlightNodesWithDelay(order[i]);
        }
        await new Promise(resolve => setTimeout(resolve, getDelay()));
        resetColors();
    } catch (error) {
        console.error('A problem occurred while highlighting nodes in order:', error);
    }
}

// Function to reset the colors of all nodes.
// It resets the background color of all elements with the class 'node' to '#a5e99e'.
function resetColors() {
    let nodes = document.getElementsByClassName('node');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.setProperty('background-color', '#a5e99e', 'important');
    }
}

// Asynchronous function that fetches tree traversal order from a given URL.
// It returns the 'order' array from the JSON response.
async function getTraversal(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        if (!data.hasOwnProperty('order')) {
            throw new Error("Missing 'order' key in response.");
        }
        return data['order'];
    } catch (error) {
        console.log('A problem occurred while fetchong the traversal:', error);
    }
}


// Function to add an event listener to a specific HTML element identified by its ID.
// The event listener triggers the fetching and highlighting of nodes when the element is clicked.
function addEventListenerForTraversal(elementId, url) {
    document.getElementById(elementId).addEventListener('click', async function() {
        let order = await getTraversal(url);
        await highlightNodesInOrder(order);
    });
}

// Function that displays the information sidebar when help icon is clicked.
function showInformationSidebar(elementId) {
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

// Add event listeners for different tree traversal orders.
addEventListenerForTraversal('preorder', '/preorder');
addEventListenerForTraversal('postorder', '/postorder');
addEventListenerForTraversal('inorder', '/inorder');
addEventListenerForTraversal('level-order', '/levelorder');


window.onload = function() {
    let slider = document.getElementById("speed");
    slider.oninput = function() {
        let value = ((this.value - this.min) / (this.max - this.min)) * 100;
        this.style.background = `linear-gradient(to right, #a5e99e ${value}%, #ffffff ${value}%)`;
    }
    
    // Trigger the input event manually for initial page load
    slider.dispatchEvent(new Event('input'));
};

window.onunload = function(){};
showInformationSidebar('help-icon');
showInformationSidebar('close-icon');





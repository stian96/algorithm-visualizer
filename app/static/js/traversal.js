// Function that highlights a specific node with a delay.
// It changes the background color of the node to the given color (default is 'rgb(248, 110, 110)').
// After the delay, it resolves the Promise.
function highlightNodesWithDelay(nodeValue, color = 'rgb(248, 110, 110)') {
    return new Promise(resolve => {
        setTimeout(() => {
            let node = document.getElementById('node-' + nodeValue);
            if (node) {
                node.style.backgroundColor = color;
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
    for (let i = 0; i < order.length; i++) {
        await highlightNodesWithDelay(order[i]);
    }
    await new Promise(resolve => setTimeout(resolve, getDelay()));
    resetColors();
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
            throw new Error('HTTP error! status: ${response.status}');
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

// Add event listeners for different tree traversal orders.
addEventListenerForTraversal('preorder', '/preorder');
addEventListenerForTraversal('postorder', '/postorder');
addEventListenerForTraversal('inorder', '/inorder');
addEventListenerForTraversal('level-order', '/levelorder');
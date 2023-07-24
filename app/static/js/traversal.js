// Function that changes color of a spesific node with delay.
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

function getDelay() {
    return Number(document.getElementById('speed').value);
}

async function highlightNodesInOrder(order) {
    for (let i = 0; i < order.length; i++) {
        await highlightNodesWithDelay(order[i]);
    }
    await new Promise(resolve => setTimeout(resolve, getDelay()));
    resetColors();
}

// Function to reset colors on all nodes.
function resetColors() {
    let nodes = document.getElementsByClassName('node');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.setProperty('background-color', '#a5e99e', 'important');
    }
}

async function getPreorderTraversal() {
    let response = await fetch('/preorder');
    let data = await response.json();
    return data['order'];
}

document.getElementById('preorder').addEventListener('click', async function() {
    let order = await getPreorderTraversal();
    await highlightNodesInOrder(order);
});

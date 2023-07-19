let totalDelay = 0;

// Class for the nodes in the binary tree.
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// The tree structure itself.
let tree = new Node(100,
    new Node(50,
        new Node(45,
            new Node(35),
            new Node(47)
        ),
        new Node(63,
            new Node(60),
            new Node(77)
        )
    ),
    new Node(120,
        new Node(110,
            new Node(102),
            new Node(117)
        ),
        new Node(135,
            new Node(125),
            new Node(150)
        )
    )
);

// Function that changes color of a spesific node with delay.
function highlightNodeWithDelay(nodeValue, color = 'rgb(248, 110, 110)') {
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

// Function to reset colors on all nodes.
function resetColors() {
    let nodes = document.getElementsByClassName('node');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.setProperty('background-color', '#a5e99e', 'important');
    }
}

// Recursive function for preorder traversal.
async function preorder(node) {
    if (node) {
        await highlightNodeWithDelay(node.value);
        await preorder(node.left);
        await preorder(node.right);
    }
}

// Recursive function for postorder traversal.
async function postorder(node) {
    if (node) {
        await postorder(node.left);
        await postorder(node.right);
        await highlightNodeWithDelay(node.value);
    }
}

// Recursive function for inorder traversal.
async function inorder(node) {
    if (node) {
        await inorder(node.left);
        await highlightNodeWithDelay(node.value);
        await inorder(node.right);
    }
}

// Function to get the delay from the slider.
function getDelay() {
    return Number(document.getElementById('speed').value);
}

// Connect the functions to the navigation buttons.
function connectToButton(buttonId, traversalFunction) {
    document.getElementById(buttonId).addEventListener('click', async function() {
        await traversalFunction(tree);
        await new Promise(resolve => setTimeout(resolve, getDelay()));
        resetColors();
    });
}

connectToButton('preorder', preorder);
connectToButton('inorder', inorder);
connectToButton('postorder', postorder);

  

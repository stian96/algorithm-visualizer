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

// Function that changes color of a spesific node.
function highlightNode(nodeValue, delay = 0, color = 'rgb(248, 110, 110)') {
    setTimeout(() => {
        let node = document.getElementById('node-' + nodeValue);
        if (node) {
            node.style.backgroundColor = color;
        }
    }, delay)
}

// Function to reset colors on all nodes.
function resetColors() {
    let nodes = document.getElementsByClassName('node');
    for (let i = 0; i < nodes.length; i++) {
        nodes[i].style.setProperty('background-color', '#a5e99e', 'important');
    }
}

// Function for preorder traversal.
function preorder(node) {
    if (node) {
        highlightNode(node.value, totalDelay);
        totalDelay += 1100;
        preorder(node.left);
        preorder(node.right);
    }
}

// Connect the functions to the navigation buttons.
document.getElementById('preorder').addEventListener('click', function() {
    totalDelay = 0;
    preorder(tree);
    setTimeout(resetColors, totalDelay);
});
  

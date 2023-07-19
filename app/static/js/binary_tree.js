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
function highlightNode(nodeValue, delay = 0, color = 'red') {
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
        nodes[i].style.backgroundColor = '#a5e99e';
    }
}

// Function for preorder traversal.
function preorder(node, delay = 0) {
    if (node) {
        highlightNode(node.value, delay);
        preorder(node.left, delay + 500);
        preorder(node.right, delay + 1000);
    }
}

// Connect the functions to the navigation buttons.
document.getElementById('preorder').addEventListener('click', function() {
    resetColors();
    preorder(tree);
});
  

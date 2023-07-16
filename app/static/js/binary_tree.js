let levelCounter = 1;
var root = null;
let currentNode = null;

// When page has loaded.
window.onload = function() {
    var button = document.getElementById("insert-btn");

    // Add event listener for click
    button.addEventListener('click', function() {
        var value = document.getElementById('value-input').value;
        var binary_tree = document.getElementsByClassName('level-' + levelCounter)[0];

        // Send data to Flask endpoint '/insert'.
        var xml_request = new XMLHttpRequest();
        xml_request.open('POST', '/insert', true);
        xml_request.setRequestHeader('Content-type', 'application/json');

        xml_request.onreadystatechange = function() {
            if (xml_request.readyState === XMLHttpRequest.DONE) {
                if (xml_request.status === 200) {
                    var response = JSON.parse(xml_request.responseText);
                    console.log(response.message);

                    // Update tree in frontend and redraw nodes.
                    insertNode(response['node-value']);
                    currentNode = findNode(response['node-value'], root);  // keep track of the current node
                    redrawNodes(binary_tree);
                } else {
                    console.error('Error:', xml_request.responseText);
                }
            }
        };
        xml_request.send(JSON.stringify({ 'node-value': value }));
        levelCounter++;
    });

    function insertNode(nodeValue) {
        if (root === null) {
            root = createNode(nodeValue);
        } 
        else {
            var currentNode = root;
            while (true) {
                if (nodeValue < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = createNode(nodeValue);
                        break;
                    } 
                    else {
                        currentNode = currentNode.left;
                    }
                } 
                else if (nodeValue > currentNode.value) {
                    if (currentNode.right === null) {
                        currentNode.right = createNode(nodeValue);
                        break;
                    } 
                    else {
                        currentNode = currentNode.right;
                    }
                } 
                else {
                    // Node with the same value already exists.
                    break;
                }
            }
        }
    }

    function createNode(nodeValue) {
        return {
            value: nodeValue,
            left: null,
            right: null
        };
    }

    function redrawNodes(treeArea) {
        // Clear the binary tree area.
        treeArea.innerHTML = "";
    
        // Recursive helper function to create and append nodes.
        function createNodeElement(nodeData, parentElement, level) {
            if (nodeData === null) {
                return;
            }
    
            // Create a new div for each node
            var nodeElement = document.createElement('div');
            nodeElement.className = 'node fade-in level-' + level;
            nodeElement.innerHTML = nodeData.value;
            parentElement.appendChild(nodeElement);
    
            // Recursively create and append child nodes
            if (nodeData.left !== null) {
                createNodeElement(nodeData.left, nodeElement, level + 1);
            }
            if (nodeData.right !== null) {
                createNodeElement(nodeData.right, nodeElement, level + 1);
            }
        }
    
        // Call the helper function with the root node of the tree.
        createNodeElement(root, treeArea, 1);
    }

    function findNode(value, node) {
        if (node === null) {
            return null;
        }
        if (node.value === value) {
            return node;
        }

        return findNode(value, node.left) || findNode(value, node.right);
    }
};


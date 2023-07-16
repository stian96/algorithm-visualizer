let nodeCounter = 0;

// When page has loaded.
window.onload = function() {
    var button = document.getElementById("insert-btn");
    var binary_tree = document.getElementsByClassName('binarytree-area')[0];
    var root = null;

    // Add event listener for click
    button.addEventListener('click', function() {
        var value = document.getElementById('value-input').value;

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
                    redrawNodes(binary_tree);
                } else {
                    console.error('Error:', xml_request.responseText);
                }
            }
        };

        xml_request.send(JSON.stringify({ 'node-value': value }));
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
      
            // Create new node element.
            if (nodeCounter === 0) {
                level = document.getElementById('level-1');
                nodeCounter++;
            }
            else if (nodeCounter === 1 || nodeCounter === 2) {
                level = document.getElementById('level-2');
                nodeCounter++;
            }
            else if (nodeCounter === 3 || nodeCounter === 4) {
                level = document.getElementById('level-3');
                nodeCounter++;
            }
            else {
                level = document.getElementById('level-4');
                nodeCounter++;
            }

            var nodeElement = document.createElement('div');
            nodeElement.className = 'node fade-in';
            nodeElement.innerHTML = nodeData.value;
      
            // Set margin based on the level.
            if (level > 1) {
                nodeElement.style.marginLeft = (level - 1) * 30 + "px";
            }
      
            // Append the node element to the parent element.
            level.appendChild(nodeElement);
      
            // Recursively create and append left and right children.
            createNodeElement(nodeData.left, nodeElement, level + 1);
            createNodeElement(nodeData.right, nodeElement, level + 1);
            }
      
            // Call the helper function with the root node of the tree.
            createNodeElement(root, treeArea, 1);
        }
};

// When page has loaded.
window.onload = function() {
    var button = document.getElementById("insert-btn");
    var binary_tree = document.getElementsByClassName('binarytree-area')[0];

    // Add event listner for click
    button.addEventListener('click', function() {
        var value = document.getElementById('value-input').value;

        // Send data to flask endpoint '/insert'.
        var xml_request = new XMLHttpRequest();
        xml_request.open('POST', '/insert', true);
        xml_request.setRequestHeader('Content-type', 'application/json');

        xml_request.onreadystatechange = function() {
            if (xml_request.readyState === XMLHttpRequest.DONE) {
                if (xml_request.status === 200) {
                    var response = JSON.parse(xml_request.responseText);
                    console.log(response.message);

                    // Add node to the website.
                    createNodeOnScreen(value);
                } 
                else {
                    console.error('Error:', xml_request.responseText);
                }
            }

        };
        xml_request.send(JSON.stringify({ 'node-value': value }));
    });

    function createNodeOnScreen(value) {
        // Create a new node.
        var node = document.createElement('div');
        node.className = 'node fade-in';

        // Add the value to the node.
        node.innerHTML = value;

        // Append new node to the binary tree area.
        binary_tree.appendChild(node);
    }
};
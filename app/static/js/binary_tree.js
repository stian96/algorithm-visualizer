// When page has loaded.
window.onload = function() {
    var button = document.getElementById("insert-btn");

    // Add event listner for click
    button.addEventListener('click', function() {
        
        var value = document.getElementById('value-input').value;
        
        // Get the area for the binary tree.
        var binary_tree = document.getElementsByClassName('binarytree-area')[0];

        // Create a new node.
        var node = document.createElement('div');
        node.className = 'node fade-in';

        // Add the value to the node.
        node.innerHTML = value;

        // Append new node to the binary tree area.
        binary_tree.appendChild(node);
    });
};
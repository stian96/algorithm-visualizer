class Node {
    constructor(value, depth, parent = null) {
      this.value = value;
      this.depth = depth;
      this.left = null;
      this.right = null;
      this.parent = parent;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      let newNode = new Node(value, 0);
  
      if (this.root === null) {
        this.root = newNode;
      } 
      else {
        this._insertNode(this.root, newNode, 1);
      }
    }
  
    _insertNode(node, newNode, depth) {
      if (newNode.value < node.value) {
        if (node.left === null) {
            newNode.depth = depth;
            newNode.parent = node;
            node.left = newNode;
        } 
        else {
            this._insertNode(node.left, newNode, depth + 1);
        }
      } 
      else {
        if (node.right === null) {
            newNode.depth = depth;
            newNode.parent = node;
            node.right = newNode;
        } 
        else {
          this._insertNode(node.right, newNode, depth + 1);
        }
      }
    }
  
    draw(container) {
      // Clear the container first.
      container.innerHTML = '';
      this._drawNodes(this.root, container);
    }
  
    _drawNodes(node, container, parentLeft = 0, parentRight = 0) {
        if (node !== null) {
          let div = document.createElement('div');
          div.className = 'node';
          div.textContent = node.value;

          var left = 200;
          var right = 200;
      
          if (node.depth != 0) {
            if (node.depth <= 2) {
                div.style.top = `${80}px`;
            }
            else if (node.depth <= 6) {
                div.style.top = `${160}px`;
            }
            

            if (node.value < node.parent.value) {
              div.style.left = `${left}px`;
              left += 200;
            } 
            else {
              div.style.right = `${right}px`;
              right += 200;
            }
          }
          else {
            div.style.left = '50%';
          } 
          
          container.appendChild(div);
      
          this._drawNodes(node.left, container, parentLeft, parentRight);
          this._drawNodes(node.right, container, parentLeft, parentRight);
        }
      }
  }

  window.onload = function() {
    // Create a new binary tree
    var tree = new BinaryTree();

    // Get references to the form input and the tree container
    var input = document.getElementById('value-input');
    var container = document.getElementById('tree-container');

    // Add event listener for click on the "Insert" button
    document.getElementById('insert-btn').addEventListener('click', function() {
        // Get the value from the input
        var value = input.value;
        console.log(value);

        // Insert the new value into the tree
        tree.insert(value);

        // Draw the tree
        tree.draw(container);

        // Clear the input
        input.value = '';
    });
};

  

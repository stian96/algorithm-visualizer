from flask import Flask, render_template, jsonify
from datastructures.binarytree import BinaryTree

app = Flask(__name__)

# Storing the tree to keep state betwee calls.
tree = BinaryTree()

# Fill the tree with the nodes from the html file.
tree.insert(100)
tree.insert(50)
tree.insert(120)
tree.insert(45)
tree.insert(63)
tree.insert(110)
tree.insert(135)
tree.insert(35)
tree.insert(47)
tree.insert(60)
tree.insert(77)
tree.insert(102)
tree.insert(117)
tree.insert(125)
tree.insert(150)


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/bintree')
def bin_tree():
    return render_template('binary_tree.html')

@app.route('/preorder', methods=['GET'])
def preorder_traversal():
    result = tree.preorder_traversal()
    return jsonify({'order': result})

@app.route('/inorder', methods=['GET'])
def inorder_traversal():
    result = tree.inorder_traversal()
    return jsonify({'order': result})

@app.route('/postorder', methods=['GET'])
def postorder_traversal():
    result = tree.postorder_traversal()
    return jsonify({'order': result})

@app.route('/levelorder', methods=['GET'])
def levelorder_traversal():
    result = tree.level_order_traversal()
    return jsonify({'order': result})

if __name__ == "__main__":
    app.run()





from flask import Flask, render_template, jsonify
from datastructures.binarytree import BinaryTree

app = Flask(__name__)

# Storing the tree to keep state betwee calls.
tree = BinaryTree()

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





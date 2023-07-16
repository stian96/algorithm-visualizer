from flask import Flask, render_template, request, jsonify
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

@app.route('/insert', methods=['POST'])
def insert_node():
    value = request.form.get('node-value')
    tree.insert(value)

    return jsonify({'message': 'Node inserted successfully'})

if __name__ == "__main__":
    app.run()





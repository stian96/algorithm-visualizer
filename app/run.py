# Import necessary modules
from flask import Flask, render_template, jsonify, request
from datastructures.binarytree import BinaryTree
from algorithms.searching_algorithms import SearchingAlgorithms

def create_app():
    app = Flask(__name__)
    app.config.from_object("config.DevelopmentConfig")
    tree = create_tree(app)
    search = create_search(app)

    @app.route('/')
     # Route to serve home page
    def home():
        return render_template('index.html')

    @app.route('/bintree')
    # Route to serve binary tree page
    def bin_tree():
        return render_template('binary_tree.html')

    @app.route('/searching')
    # Route to serve search page
    def searching():
        return render_template('search_array.html')

    @app.route('/<traversal_type>', methods=['GET'])
    # Route to handle different types of tree traversal
    def tree_traversal(traversal_type):
        try:
            # Try to call the appropriate traversal method on the tree object
            result = getattr(tree, f'{traversal_type}_traversal')()
            return jsonify({'order': result})
        except AttributeError:
            # If the traversal type is not recognized, return an error
            return jsonify({'error': f'Invalid traversal type: {traversal_type}'}), 400


    @app.route('/linear-search', methods=['POST'])
    # Route to handle linear search requests
    def linear_search():
        element = request.get_json().get('element')
        if element is None:
            return jsonify({'error': 'Missing element parameter.'}), 400

        # Perform linear search for the specified element
        steps = search.linear_search(int(element))
        return jsonify({'steps': steps})


    @app.route('/binary-search', methods=['POST'])
    # Route to handle binary search requests
    def binary_search():
        element = request.get_json().get('element')
        print(f"Result element: {element}")
        if element is None:
            return jsonify({'error': 'Missing element parameter.'}), 400

        # Perform binary search for the specified element
        steps = search.binary_search(int(element))
        return jsonify({'steps': steps})

    return app

# Create a BinaryTree object and populate it with nodes from the configuration
def create_tree(app):
    tree = BinaryTree()
    nodes = app.config['TREE_VALUES']
    for node in nodes:
        tree.insert(node)
    return tree

# Create a SearchingAlgorithms object with the array from the configuration
def create_search(app):
    search = SearchingAlgorithms(app.config['ARRAY_VALUES'])
    return search

# When this script is run directly, create a Flask application and run it
if __name__ == "__main__":
    app = create_app()
    app.run()





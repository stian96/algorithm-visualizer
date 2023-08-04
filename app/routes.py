# Import necessary modules
from flask import render_template, jsonify, request


def register_routes(app, tree, search, sort):

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

    @app.route('/sorting')
    # Route to serve sorting page.
    def sorting():
        return render_template('sorting.html')

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

    @app.route('/recursive-search', methods=['POST'])
    def recursive_search():
        element = request.get_json().get('element')
        if element is None:
            return jsonify({'error': 'Missing element parameter.'}), 400

        steps = search.recursive_linear_search(int(element))
        return jsonify({'steps': steps})

    @app.route('/sort/<algorithm_type>', methods=['GET'])
    def sort_algorithm(algorithm_type):
        try:
            # Try to call the appropriate sorting method on the SortingAlgorithms object
            steps = getattr(sort, f'{algorithm_type}')()
            return jsonify({'steps': steps})
            
        except AttributeError:
            # If the sorting algorithm type is not recognized, return an error
            return jsonify({'error': f'Invalid algorithm type: {algorithm_type}'}), 400


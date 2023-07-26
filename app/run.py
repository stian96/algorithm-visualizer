from flask import Flask, render_template, jsonify
from datastructures.binarytree import BinaryTree

def create_app():
    app = Flask(__name__)
    app.config.from_object("config.DevelopmentConfig")
    tree = create_tree(app)

    @app.route('/')
    def home():
        return render_template('index.html')

    @app.route('/bintree')
    def bin_tree():
        return render_template('binary_tree.html')

    @app.route('/searching')
    def searching():
        return render_template('search_array.html')

    @app.route('/<traversal_type>', methods=['GET'])
    def tree_traversal(traversal_type):
        try:
            result = getattr(tree, f'{traversal_type}_traversal')()
            return jsonify({'order': result})
        except AttributeError:
            return jsonify({'error': f'Invalid traversal type: {traversal_type}'}), 400

    return app

def create_tree(app):
    tree = BinaryTree()
    nodes = app.config['TREE_VALUES']
    for node in nodes:
        tree.insert(node)
    return tree

if __name__ == "__main__":
    app = create_app()
    app.run()





# Import necessary modules
from flask import Flask
from datastructures.binarytree import BinaryTree
from algorithms.searching_algorithms import SearchingAlgorithms
from algorithms.sorting_algorithms import SortingAlgorithms
from routes import register_routes

def create_app():
    app = Flask(__name__)
    app.config.from_object("config.DevelopmentConfig")
    
    tree = create_tree(app)
    search = create_search(app)
    sort = create_sort()
    register_routes(app, tree, search, sort)

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

def create_sort():
    sort = SortingAlgorithms()
    return sort

# When this script is run directly, create a Flask application and run it
if __name__ == "__main__":
    app = create_app()
    app.run()





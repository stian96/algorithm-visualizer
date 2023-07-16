from flask import Flask
from app.datastructures.binarytree import BinaryTree

app = Flask(__name__, static_folder='static')

# Storing the tree to keep state betwee calls.
tree = BinaryTree()

@app.route('/')
def home():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run()





from flask import Flask, render_template
from datastructures.binarytree import BinaryTree

app = Flask(__name__)

# Storing the tree to keep state betwee calls.
tree = BinaryTree()

@app.route('/')
def home():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()





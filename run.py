from flask import Flask, request, jsonify
from app.datastructures.binarytree import BinaryTree

app = Flask(__name__)

# Storing the tree to keep state between calls.
tree = BinaryTree()

@app.route('/insert', methods=['POST'])
def insert():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    data = request.get_json()

    if 'value' not in data:
        return jsonify({"msg:" "Missing 'value' in JSON"}), 400

    tree.insert(data['value'])

    return jsonify({"msg:" "Value inserted successfully"}), 200

@app.route('/remove', methods=['POST'])
def remove():
    if not request.is_json:
        return jsonify({"msg:" "Missing JSON in request"}), 400

    data = request.get_json()

    if 'value' not in data:
        return jsonify({"msg:" "Missing 'value' in JSON"}), 400

    tree.remove(data['value'])





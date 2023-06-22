from flask import Flask, request, jsonify
from app.datastructures.binarytree import BinaryTree

app = Flask(__name__)

# Storing the tree to keep state between calls.
tree = BinaryTree()

@app.route('/')
def home():
    return app.send_static_file('index.html')

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

    return jsonify({"msg:" "Value removed successfully"}), 200

@app.route('/traverse/<string:order>', methods=['GET'])
def traverse(order):
    if order not in ['inorder', 'postorder', 'preorder', 'level_order']:
        return jsonify({"msg": "Invalid traversal order"}), 400

    if order == 'inorder':
        result = tree.inorder_traversal()
    elif order == 'postorder':
        result = tree.postorder_traversal()
    elif order == 'preorder':
        result = tree.preorder_traversal()
    elif order == 'level_order':
        result = tree.level_order_traversal()

    return jsonify({"result": result}), 200

if __name__ == "__main__":
    app.run()





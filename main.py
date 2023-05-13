from datastructures.trees.binarytree import BinaryTree

# Initialize the binary tree.
root = BinaryTree()

# Insert root
root.insert(10)

# Insert left child
root.insert(8)

# Insert right child
root.insert(15)

# Insert more nodes
root.insert(2)
root.insert(9)
root.insert(22)
root.insert(15)

# Print out the tree
root.inorder_traversal()
print()
root.postorder_traversal()
print()
root.preorder_traversal()

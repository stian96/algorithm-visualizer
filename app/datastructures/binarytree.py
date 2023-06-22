from app.datastructures.node import Node
from collections import deque


class BinaryTree:
    """
    A binary tree class containing the data structure itself, and
    in, pre, post and level-order traversal functions.
    """
    def __init__(self):
        self.root = None

    # Inserts a new value into the binary tree.
    def insert(self, value):

        # Is root empty?
        if self.root is None:
            self.root = Node(value)
        else:
            current = self.root
            parent = None
            left_child = False

            # Loop until we find an available space.
            while current is not None:
                parent = current

                if value < current.value:
                    current = current.left
                    left_child = True

                elif value == current.value:
                    current.number += 1
                    return

                else:
                    current = current.right
                    left_child = False

            # Insert new node in left or right child.
            if left_child:
                parent.left = Node(value)
            else:
                parent.right = Node(value)

    # Removes a value from the binary tree.
    def remove(self, value):
        self.root = self._remove(self.root, value)

    # Internal recursive method for removal.
    def _remove(self, node, value):
        # Base case.
        if node is None:
            return node

        if value < node.value:
            node.left = self._remove(node.left, value)
        elif value > node.value:
            node.right = self._remove(node.right, value)
        else:
            # Node with one or no child.
            if node.left is None:
                tmp = node.right
                return tmp
            elif node.right is None:
                tmp = node.left
                return tmp
            else:
                # Node with two children
                # Get the in-order successor (smallest in the right subtree)
                current = node.right
                while current.left is not None:
                    current = current.left

                # Copy the in-order successor's value to this node
                node.value = current.value

                # Delete the in-order successor
                node.right = self._remove(node.right, current.value)

    # Prints left subtree, then root and right subtree last.
    def inorder_traversal(self):
        if not self.is_empty():
            print("Inorder traversal of binary tree:")
            self._inorder(self.root)
        else:
            raise Exception("Root is empty, cannot print tree.")

    # Internal recursive method for printing values.
    def _inorder(self, node):
        result = []
        if node is not None:
            # In-order traversal of the tree.
            result.extend(self._inorder(node.left))
            result.append(node.value)
            result.extend(self._inorder(node.right))
        return result

    # Prints left and right subtrees, then the root.
    def postorder_traversal(self):
        if self.root is not None:
            print("Postorder traversal of binary tree:")
            self._postorder(self.root)
        else:
            raise Exception("Root is empty, cannot print tree.")

    def _postorder(self, node):
        if node is not None:
            # Post-order traversal of the tree.
            self._postorder(node.left)
            self._postorder(node.right)
            print(str(node.value), end=" ")

    # Prints root, then left and right subtrees.
    def preorder_traversal(self):
        if not self.is_empty():
            print("Preorder traversal of binary tree:")
            self._preorder(self.root)
        else:
            raise Exception("Root is empty, cannot print tree.")

    def _preorder(self, node):
        if node is not None:
            # Post-order traversal of the tree.
            print(str(node.value), end=" ")
            self._preorder(node.left)
            self._preorder(node.right)

    # Uses a queue to print the order.
    def level_order_traversal(self):
        print("Level-order traversal of binary tree:")
        if self.is_empty():
            raise Exception("Root is empty, cannot print tree.")

        queue = deque([self.root])
        while queue:
            node = queue.popleft()
            print(str(node.value), end=' ')

            # Enqueue left and right children.
            if node.left is not None:
                queue.append(node.left)
            if node.right is not None:
                queue.append(node.right)

    # Checks if tree is empty.
    def is_empty(self):
        return self.root is None

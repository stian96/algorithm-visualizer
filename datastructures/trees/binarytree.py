from node import Node


class BinIntTree:
    """
    A binary tree class containing integer values.
    """

    def __init__(self):
        self.root = None

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

    def print_tree(self):
        if self.root is not None:
            self._print_tree(self.root)

        return Exception("Root is empty, cannot print tree.")

    def _print_tree(self, node):
        if node is not None:
            self._print_tree(node.left)
            print(str(node.value))
            self._print_tree(node.right)






from node import Node


class BinIntTree:

    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root is None:
            self.root = Node(value)
        else:
            current = self.root
            parent = None
            left_child = False

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

            if left_child:
                parent.left = Node(value)
            else:
                parent.right = Node(value)





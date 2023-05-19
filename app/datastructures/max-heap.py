class MaxHeap:
    """
    Max-heap class used to implement the heapsort algorithm
    in the 'SortingAlgorithms' class.
    """
    def __init__(self):
        self.heap = []

    def parent(self, index):
        """
        Function used to return the parent of a node.
        :param index: Index to the child of the parent.
        :return: the parent node.
        """
        return (index - 1) // 2

    def left_child(self, index):
        """
        Function used to get the left child of an parent node.
        :param index: The parent nodes index.
        :return: The left child of the parent.
        """
        return 2 * index + 1

    def right_child(self, index):
        """
        Function used to get the right child of an parent node.
        :param index: The parent node index.
        :return: The right child of the parent node.
        """
        return 2 * index + 2

    def add(self, value):
        """
        Function used to add a new value to the max-heap.
        :param value: The value to be inserted.
        """
        self.heap.append(value)
        self._sift_up(len(self.heap) - 1)

    def _sift_up(self, index):
        while index > 0:
            parent = self.parent(index)
            if self.heap[parent] < self.heap[index]:
                self.swap(self.heap[parent], self.heap[index])
                index = parent
            else:
                break

    def _sift_down(self, index):
        while self.left_child(index) < len(self.heap):
            left = self.left_child(index)
            right = self.right_child(index)

            largest = index
            if self.heap[left] > self.heap[largest]:
                largest = left
            if right < len(self.heap) and self.heap[right] > self.heap[largest]:
                largest = right

            if largest != index:
                self.swap(self.heap[largest], self.heap[index])
                index = largest
            else:
                break

    def pop_max(self):
        max_value = self.heap[0]
        self.heap[0] = self.heap[-1]
        self.heap.pop()
        self._sift_down(0)
        return max_value

    def swap(self, index1, index2):
        """
        Function used ot swap the places of two elements in the max-heap.
        :param index1:
        :param index2:
        :return:
        """
        self.heap[index1], self.heap[index2] = self.heap[index2], self.heap[index1]




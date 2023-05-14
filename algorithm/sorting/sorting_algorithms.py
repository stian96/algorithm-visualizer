class SortingAlgorithms:
    """
    Class containing different sorting algorithms:
    1. Selection sort
    """
    def __init__(self, array):
        self.array = array

    def selection_sort(self):

        # Iterate over all elements.
        for i in range(len(self.array)):

            # Find min index in unsorted list.
            min_index = i

            # If there is a smaller element, set
            # min index equal to this.
            for j in range(i + 1, len(self.array)):
                if self.array[j] < self.array[min_index]:
                    min_index = j

            # Swap elements.
            self.array[i], self.array[min_index] = self.array[min_index], self.array[i]
        return self.array


class SearchingAlgorithms:
    """
    Class that contains functions for the following search algorithms:
    1. Linear search
    2. Binary search
    """
    def __init__(self, array):
        self.array = array

    def linear_search(self, element):

        # Get length of the array
        n = len(self.array)

        # Iterate over the list sequentially.
        for i in range(n):
            if self.array[i] == element:
                return self.array[i]

        return None


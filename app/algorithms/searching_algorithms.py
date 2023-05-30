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

    def binary_search(self, element):
        """
        A divide an conquer algorithm that excludes half of the array
        in every iteration of the search.
        It has a time complexity of O(log n)
        :param element: The element to search for.
        :return: Index of the element if found, None else.
        """
        low = 0
        high = len(self.array) - 1

        while low <= high:

            mid = (low + high) // 2
            found = self.array[mid]

            if element == found:
                return mid
            if element < found:
                high = mid - 1
            else:
                low = mid + 1

        return None








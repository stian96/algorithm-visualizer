class SortingAlgorithms:
    """
    Class containing different sorting algorithms:
    1. Selection sort
    2. Insertion sort
    """

    def __init__(self, array):
        self.array = array

    def selection_sort(self):
        """
        Sorts the array in ascending order using the selection sort algorithm.
        This algorithm has a time complexity of O(n^2), where n is the length of the list.
        """
        n = len(self.array)

        # Iterate over all elements.
        for i in range(n):

            # Find min index in unsorted list.
            min_index = i

            # If there is a smaller element, set
            # min index equal to this.
            for j in range(i + 1, n):
                if self.array[j] < self.array[min_index]:
                    min_index = j

            # Swap elements.
            self.array[i], self.array[min_index] = self.array[min_index], self.array[i]
        return self.array

    def insertion_sort(self):
        """
        Sorts the array in ascending order using the insertion sort algorithm.
        This algorithm has a time complexity of O(n^2), where n is the length of the list.
        Returns: list: The sorted array
        """
        n = len(self.array)

        # Iterate through array, starting from the
        # second element.
        for i in range(1, n):
            # Hold on first and second element.
            second = self.array[i]
            first = i - 1

            # If second element is less than first,
            # switch places of the elements.
            while first >= 0 and second < self.array[first]:
                self.array[first + 1] = self.array[first]
                first -= 1
            self.array[first + 1] = second
        return self.array

    def quicksort(self):
        """
        Sorts the array in ascending order using the quick sort algorithm.
        This algorithm has a time complexity of O(log n), where n is the length of the list.
        :return: The sorted array
        """
        n = len(self.array)

        # Does the array only contain one element?
        if n <= 1:
            return self.array
        # Execute the quick sort algorithm.
        else:
            self.array = self._quicksort(self.array)
            return self.array

    def _quicksort(self, array):
        n = len(array)

        # Does the array only contain one element?
        if n <= 1:
            return array
        else:
            partition = array[n // 2]
            left = [x for x in array if x < partition]
            middle = [x for x in array if x == partition]
            right = [x for x in array if x > partition]
            return self._quicksort(left) + middle + self._quicksort(right)


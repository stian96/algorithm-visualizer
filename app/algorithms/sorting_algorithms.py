from app.datastructures.maxheap import MaxHeap


class SortingAlgorithms:
    """
    Class containing different sorting algorithms:
    1. Selection sort
    2. Insertion sort
    3. Quick sort
    4. Bubble sort
    5. Merge sort
    """

    def __init__(self, array):
        self.array = array

    def selection_sort(self):
        """
        Sorts the array in ascending order using the selection sort algorithms.
        This algorithms has a time complexity of O(n^2), where n is the length of the list.
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
        Sorts the array in ascending order using the insertion sort algorithms.
        This algorithms has a time complexity of O(n^2), where n is the length of the list.
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
        Sorts the array in ascending order using the quick sort algorithms.
        This algorithms has a time complexity of O(n log n), where n is the length of the list.
        :return: The sorted array
        """
        n = len(self.array)

        # Does the array only contain one element?
        if n <= 1:
            return self.array
        # Execute the quick sort algorithms.
        else:
            self.array = self._quicksort(self.array)
            return self.array

    def _quicksort(self, array):
        """
        Internal recursive function executing the quicksort algorithms.
        :param array: The array to be sorted.
        :return: The sorted array.
        """
        n = len(array)

        # Base case: if the array contains 1 or 0 elements, it's already sorted
        if n <= 1:
            return array
        else:
            # Choose the partition element (in this case, the middle element of the array)
            partition = array[n // 2]

            # Split array into three parts:
            # 'left' contains elements less than the partition
            # 'middle' contains elements equal to the partition
            # 'right' contains elements greater than the partition
            left = [x for x in array if x < partition]
            middle = [x for x in array if x == partition]
            right = [x for x in array if x > partition]

            # Recursively sort the 'left' and 'right' parts and combine them with 'middle'
            return self._quicksort(left) + middle + self._quicksort(right)

    def bubble_sort(self):
        """
        Sorts the array in ascending order using the bubble sort algorithms.
        This algorithms has a time complexity of O(n^2), where n is the length of the list.
        """
        n = len(self.array)

        # Iterate over all elements
        for i in range(n):

            # Perform (n - i - 1) comparisons and swaps.
            for j in range(n - i - 1):

                # If the current element is greater than the next, swap them.
                if self.array[j] > self.array[j + 1]:
                    self.array[j], self.array[j + 1] = self.array[j + 1], self.array[j]

        return self.array

    def merge_sort(self):
        """
        Sorts the array in ascending order using the merge sort algorithm.
        This algorithm has a time complexity of O(n log n), where n is the length of the list.
        """
        self.array = self._merge_sort(self.array)
        return self.array

    def _merge_sort(self, array):
        """
           Internal recursive function executing the merge sort algorithm.
           :param array: The array to be sorted.
           :return: The sorted array.
           """
        n = len(array)

        # Base case: If array contains 0 or 1 element it is already sorted.
        if n <= 1:
            return array

        # Split the array in half
        mid = n // 2
        left = array[:mid]
        right = array[mid:]

        # Recursively sort each half
        left = self._merge_sort(left)
        right = self._merge_sort(right)

        # Merge the sorted halves
        return self._merge(left, right)

    def _merge(self, left, right):
        """
        Helper function to merge two sorted arrays.
        :param left: Sorted array.
        :param right: Sorted array.
        :return: Merged sorted array.
        """
        merged = list()
        i = j = 0

        # Compare elements and insert the smallest into the result.
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                merged.append(left[i])
                i += 1
            else:
                merged.append(right[j])
                j += 1

        # If there are any elements left in either array, append them to the result.
        merged.extend(left[i:])
        merged.extend(right[j:])
        return merged

    def heap_sort(self):
        """
        Sorts the array in ascending order using the heap sort algorithm.
        This algorithm has a time complexity of O(n log n), where n is the length of the list.
        """
        heap = MaxHeap()
        n = len(self.array)

        # Add all array elements to the max-heap.
        for i in range(n):
            heap.add(self.array[i])

        # Pop all the elements from the max-heap.
        for i in range(n - 1, -1, -1):
            self.array[i] = heap.pop_max()

        return self.array

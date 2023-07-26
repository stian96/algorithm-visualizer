class SearchingAlgorithms:
    """
    Class that contains functions for the following search algorithms:
    1. Linear search
    2. Binary search
    3. Recursive linear search
    4. Recursive binary search
    """
    def __init__(self, array):
        self.array = array

    def linear_search(self, element):
        """
        Sequential linear search algorithm.
        It has a time complexity of O(n), since it iterates
        over all the elements in the list at worst case.

        :param element: The element to be found.
        :return: All the steps of the algorithm as a list of dictionaries.
        """
        steps = []
        n = len(self.array)
        for i in range(n):
            steps.append({
                'step': i,
                'value': self.array[i],
                'found': self.array[i] == element
            })
            if self.array[i] == element:
                break

        return steps

    def binary_search(self, element):
        """
        A divide an conquer algorithm that excludes half of the array
        in every iteration of the search.
        It has a time complexity of O(log n)

        :param element: The element to search for.
        :return: The steps of the algorithm as a list of dicts.
        """
        steps = []
        low = 0
        high = len(self.array) - 1

        while low <= high:
            mid = (low + high) // 2
            found = self.array[mid]

            if element == found:
                steps.append({'value': found, 'found': True})
                return steps
            elif element < found:
                high = mid - 1
            else:
                low = mid + 1
            
            steps.append({'value': found, 'found': False})

        return steps

    def recursive_linear_search(self, element):
        """
        Public function that sets up the recursive call.

        :param element: The element to search for.
        :return: Index of the element if found, None else.
        """
        return self._recursive_linear_search(element, 0)

    def _recursive_linear_search(self, element, index):
        """
        Private internal recursive method executing a linear search.

        :param element: The element to search for.
        :param index: Index used to find the right element.
        :return: Index of the element if found, None else.
        """
        if index >= len(self.array):
            return None
        elif element == self.array[index]:
            return index
        else:
            return self._recursive_linear_search(element, index + 1)

    def recursive_binary_search(self, element):
        """
        Public function that sets up the recursive binary search call.

        :param element: The element to search for.
        :return: Index of the element if found, None else.
        """
        return self._recursive_binary_search(element, 0, len(self.array) - 1)

    def _recursive_binary_search(self, element, low, high):
        """
        Private internal recursive binary search method.
        This method has a time complexity of O(log n).

        :param element: Element to search for.
        :param low: The index of the first element in the current search segment.
        :param high: The index of the last element in the current search segment.
        :return: Index of the element if found, None else.
        """
        if low > high:
            return None
        else:
            mid = (low + high) // 2
            if element == self.array[mid]:
                return mid
            elif element < self.array[mid]:
                return self._recursive_binary_search(element, low, mid - 1)
            else:
                return self._recursive_binary_search(element, mid + 1, high)





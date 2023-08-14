from app.algorithms.sorting_algorithms import SortingAlgorithms
import random

class TestSortingAlgorithms:

    def setup_method(self):

        self.array = [x for x in range(1, 11)]

        # Shuffle array to ensure its not pre-sorted.
        random.shuffle(self.array)
        self.sort = SortingAlgorithms()

    def test_selection_sort(self):
        
        # Using 'copy' to avoid changes affecting other tests.
        result = self.sort.selection_sort(self.array.copy())

        # Get the correctly sorted array.
        sorted_array = sorted(self.array)

        # The last step should be equal to the sorted_array.
        assert result[-1] == sorted_array

    
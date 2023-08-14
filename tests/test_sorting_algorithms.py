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

    def test_already_sorted_input_for_selection_sort(self):

        sorted_array = sorted(self.array)
        sort_result = self.sort.selection_sort(sorted_array.copy())

        assert sort_result[-1] == sorted_array

    def test_insertion_sort(self):

        result = self.sort.insertion_sort(self.array.copy())
        sorted_array = sorted(self.array)
        assert result[-1] == sorted_array

    def test_already_sorted_input_for_insertion_sort(self):

        sorted_array = sorted(self.array)
        sort_result = self.sort.insertion_sort(sorted_array.copy())

        assert sort_result[-1] == sorted_array

    def test_reverse_sorted_input(self):
        reversed_array = sorted(self.array, reverse=True)
        
        selection_result = self.sort.selection_sort(reversed_array.copy())
        assert selection_result[-1] == sorted(self.array)
        
        insertion_result = self.sort.insertion_sort(reversed_array.copy())
        assert insertion_result[-1] == sorted(self.array)

    def test_with_duplicates(self):

        # Introducing duplicates into the array.
        self.array.extend(self.array)
        
        selection_result = self.sort.selection_sort(self.array.copy())
        assert selection_result[-1] == sorted(self.array)
        
        insertion_result = self.sort.insertion_sort(self.array.copy())
        assert insertion_result[-1] == sorted(self.array)


    def test_sorting_algorithm_steps(self):

         # This test checks that the steps list grows in size as expected
        selection_result = self.sort.selection_sort(self.array.copy())
        insertion_result = self.sort.insertion_sort(self.array.copy())

        # Ensure the number of steps corresponds to the array's length.
        # For selection sort, the number of steps should be equal to the length of the array plus one,
        # because it appends the initial unsorted array as the first step.
        assert len(selection_result) == len(self.array) + 1

        # For insertion sort, the first element is considered sorted, so the steps should be length of the array minus one.
        assert len(insertion_result) == len(self.array) - 1
    
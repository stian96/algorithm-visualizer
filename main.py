from algorithm.sorting.sorting_algorithms import SortingAlgorithms


# Create a array with random numbers.
array = [30, 2, 5, 66, 731, 2, 8, 74, 13]

algorithm = SortingAlgorithms(array)

# Before sort:
print(array)

# After quicksort:
new_array = algorithm.bubble_sort()
print(new_array)

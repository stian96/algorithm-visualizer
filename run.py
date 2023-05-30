from app.algorithms.searching_algorithms import SearchingAlgorithms
from app.algorithms.sorting_algorithms import SortingAlgorithms

array = [4, 100, 1, 56, 23, 7, 8, 5, 99]

sorted_array = SortingAlgorithms(array)
sorted_array.bubble_sort()

print("Array after sort with bubble sort algorithm:")
print(sorted_array.array)

print("\nTest of recursive sorting algorithm:")
search = SearchingAlgorithms(sorted_array.array)
index = search.recursive_binary_search(7)
print(f"Value: {sorted_array.array[index]}")
print(f"Index: {index}")




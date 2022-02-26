def swap(array, pos1, pos2):
	array[pos1], array[pos2] = array[pos2], array[pos1]
	return array

def insertionSort(array):
    for currentpos in range(1, len(array)):
       j = currentpos - 1
       i = currentpos
       while j >= 0 and array[j] > array[i]:
           swap(array, i, j)
           i -= 1
           j -= 1
    return array

list = [8, 5, 2, 9, 5, 6, 3]
print(insertionSort(list))

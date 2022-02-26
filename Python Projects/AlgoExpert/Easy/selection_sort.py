def swap(array, pos1, pos2):
	array[pos1], array[pos2] = array[pos2], array[pos1]
	return array
def selectionSort(array):
    for currentpos in range(len(array)):
        minpos = currentpos
        nextpos = currentpos + 1
        while nextpos < len(array):
            if array[minpos] > array[nextpos]:
                swap(array, minpos, nextpos)
            nextpos += 1
    return array
    
list = [8, 5, 2, 9, 5, 6, 3]
print(selectionSort(list))
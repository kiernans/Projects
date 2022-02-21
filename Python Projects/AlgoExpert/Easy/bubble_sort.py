def swap(list, pos1, pos2):
    list[pos1], list[pos2] = list[pos2], list[pos1]
    return list

def bubbleSort(array):
    isSorted = False
    sorted = 0
    first = 0
    second = 1
    while not isSorted:
        isSorted = True
        for first in range(len(array) - sorted - 1):
            second = first + 1
            if array[first] > array[second]:
                swap(array, first, second)
                isSorted = False
        sorted += 1
    return array

list = [8, 5, 2, 9, 5, 6, 3]
print(bubbleSort(list))
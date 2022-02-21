def binarySearch(array, target):
	start = 0
	end = len(array)
	mid = int((start + end) / 2)
	
	for idx, element in enumerate(array):
		if target > element:
			binarySearch(array[mid+1:end], target)
		elif target < element:
			binarySearch(array[start:mid], target)
		else:
			return idx
	return -1


array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
print(binarySearch(array, 25))
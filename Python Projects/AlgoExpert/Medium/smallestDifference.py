def smallestDifference(arrayOne, arrayTwo):
	arrayOne.sort()
	arrayTwo.sort()
	i = 0
	j = 0
	while i < len(arrayOne) and j < len(arrayTwo):
		firstNum, secondNum = arrayOne[i], arrayTwo[j]
		if (firstNum == secondNum):
			break
		if firstNum < secondNum:
			i += 1
		elif secondNum < firstNum:
			j += 1
	return [firstNum, secondNum]

list1 = [-1, 5, 10, 20, 3]
list2 = [26, 134, 135, 15, 17]

print(smallestDifference(list1, list2))
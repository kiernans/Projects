def findThreeLargestNumbers(array):
    maxNums = []
    for element in array:
        if len(maxNums) < 3:
            maxNums.append(element)
            maxNums.sort()
        elif element > maxNums[0]:
            maxNums.append(element)
            maxNums.sort()
            maxNums.pop(0)
    return maxNums

    
    
myList = [55, 7, 8]
print(findThreeLargestNumbers(myList))
#Demonstrate *args function to take in as many arguments as needed
def mysum(*numbers):
    myOutput = 0
    for number in numbers:
        myOutput += number
    return myOutput

print(mysum(1,2,3,4,5,6,7))
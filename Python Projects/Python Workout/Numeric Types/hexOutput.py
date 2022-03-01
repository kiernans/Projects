def hexOutput():
    decimal = 0
    hexnum = input("Enter hexidecimal number to be converted: ")
    for power, digit in enumerate(reversed(hexnum)):
        decimal += int(digit, 16) * (16 ** power)
    return decimal

print(hexOutput())
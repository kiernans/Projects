#Takes in word returns string
#Adds ub before every vowel
def ubbi_dubbi(word):
    output = []
    for letter in word:
        if letter in 'aeiou':
            output.append(f'ub{letter}')
        else:
            output.append(letter)
    return ''.join(output)

print(ubbi_dubbi("apple"))
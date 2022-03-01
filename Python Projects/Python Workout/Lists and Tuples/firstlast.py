#Takes sequence, returns first and last as sequence of same type
def firstlast(sequence):
    return sequence[:1] + sequence[-1:]

print(firstlast('abcd'))
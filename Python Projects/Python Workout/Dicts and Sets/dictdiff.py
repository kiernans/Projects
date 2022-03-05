def dictdiff(d1, d2):
    output = {}
    all_keys = d1.keys() | d2.keys()
    
    for key in all_keys:
        if d1.get(key) != d2.get(key):
            output[key] = [d1.get(key), d2.get(key)]
        return output
    
    
    
d1 = {'a': 1, 'b': 2, 'c': 3, 'd': 10}
d2 = {'a': 1, 'b': 2, 'c': 4, 'd': 30}
print(dictdiff(d1, d2))
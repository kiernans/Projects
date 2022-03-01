#Takes arguments of any type (except dicts and sets) and returns their summation.
def mysum(*args):
    if not args:
        return args
    output = args[0]
    for arg in args[1:]:
        output += arg
    return output

print(mysum(10,20,30,40))
print(mysum())
print(mysum(['a','b','c'], ['r','s','t']))
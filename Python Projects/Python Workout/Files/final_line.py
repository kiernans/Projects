
def get_final_line(filename):
    with open (filename) as myFile:
        for line in myFile:
            final_line = line
        return final_line
    
print(get_final_line('test.txt'))
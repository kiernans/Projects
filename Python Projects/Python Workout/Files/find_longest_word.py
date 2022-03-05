import os
#Finds the longest word within a file, returns string
def find_longest_word(filename):
    longest_word = ''
    with open(filename) as myFile:
        for line in myFile:
            for word in line.split():
                if len(word) > len(longest_word):
                    longest_word = word
        return longest_word

#Finds longest word within all files within directory, returns dictionary
def find_all_longest_words(dirname):
    return {filename:
			find_longest_word(os.path.join(dirname, filename))

			for filename in os.listdir(dirname)
			if os.path.isfile(os.path.join(dirname, filename))
		}
    
print(find_all_longest_words('.'))
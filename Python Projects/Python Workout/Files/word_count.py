def word_count(filename):
    counts = {'chars' : 0,
              'words': 0,
              'lines': 0
        	}
    unique_words = set()
    with open (filename) as myFile:
        for line in myFile:
            counts['chars'] += len(line)
            counts['words'] += len(line.split(' '))
            counts['lines'] += 1
            unique_words.update(line.split())
        counts['unique_words'] = len(unique_words)
    for key, value in counts.items():
        print(f'{key} {value}')
             
            
word_count("wcfile.txt")
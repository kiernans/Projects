from collections import Counter

#Places words into list for later most_repeating_word to use
def put_words_in_list(words):
    return words.split(' ')

#Returns count of the most repeated character
def most_repeating_letter_count(word):
    return Counter(word).most_common(1)[0][1]

#Returns word with highest single character count
def most_repeating_word(words):
    return max(put_words_in_list(words), 
            key=most_repeating_letter_count)

WORDS = 'HAHA what is happening'
  
print(most_repeating_word(WORDS))


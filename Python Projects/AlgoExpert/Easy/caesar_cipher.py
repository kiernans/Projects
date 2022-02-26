def caesarCipherEncryptor(string, key):
	string2 = ""
	key = key % 26
	for letter in string:
		#Case for when step is past range of letters, wrap back around to A
		if ord(letter) + key > ord('z'):
			tempkey = key - (ord('z') - ord(letter) + 1)
			letter = chr(ord('a') + tempkey)
			string2 += letter
		#All other cases
		else:
			string2 += chr(ord(letter) + key)
	return string2


print(caesarCipherEncryptor("xyz", 2))


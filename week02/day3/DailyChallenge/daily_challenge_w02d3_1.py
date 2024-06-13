# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.


user_word = input("Enter a word: ")

word_dict = {}

for index, char in enumerate(user_word):
    if char in word_dict:
        word_dict[char].append(index)
    else:
        word_dict[char] = [index]

print(word_dict)
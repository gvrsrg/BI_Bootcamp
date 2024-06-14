# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
# Examples

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

# longest_word("A thing of beauty is a joy forever.") ➞ "forever."

# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"

def longest_word(text):
    word_list = text.split(" ")

    max_length = 0
    index_max = -1

    for index, word in enumerate(word_list):
        if len(word)> max_length:
            max_length = len(word)
            index_max = index
    
    if index == -1:
        return ''
    else:
        return word_list[index_max]


print()


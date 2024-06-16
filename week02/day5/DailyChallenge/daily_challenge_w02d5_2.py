# Write a function that finds the longest word in a sentence. If two or more words are found, return the first longest word.
# Characters such as apostrophe, comma, period count as part of the word (e.g. O’Connor is 8 characters long).
# Examples

# longest_word("Margaret's toy is a pretty doll.") ➞ "Margaret's"

# longest_word("A thing of beauty is a joy forever.") ➞ "forever."

# longest_word("Forgetfulness is by all means powerless!") ➞ "Forgetfulness"
import time

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

def longest_word_v2(text):
    word_list = text.split(" ")

    length_list = [len(word) for word in word_list]
    max_length = max(length_list)
    index_max = length_list.index(max_length)
    return word_list[index_max]


start_time = time.time()
print(longest_word("Margaret's toy is a pretty doll."))

print(longest_word("A thing of beauty is a joy forever."))

print(longest_word("Forgetfulness is by all means powerless!"))

print(f"V1 execution time: {time.time()-start_time}")

start_time = time.time()
print(longest_word_v2("Margaret's toy is a pretty doll."))

print(longest_word_v2("A thing of beauty is a joy forever."))

print(longest_word_v2("Forgetfulness is by all means powerless!"))
print(f"V2 execution time: {time.time()-start_time}")
# Write a program that accepts a comma separated sequence of words as input and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension

user_input = input("Enter comma separated list of words: ")

user_list = user_input.split(",")

user_list.sort()

print(",".join(user_list))
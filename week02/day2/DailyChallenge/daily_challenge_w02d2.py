# Challenge 1
# Ask the user for a number and a length.
# Create a program that prints a list of multiples of the number until the list length reaches length.

user_number = int(input("Enter number: "))
user_length = int(input("Enter length: "))
print([user_number*i for i in range(1, user_length + 1)])



# Challenge 2
# Write a program that asks a string to the user, and display a new string with any duplicate consecutive letters removed.

user_string = input("Enter string: ")
new_string = user_string[0]

for char in user_string:
    if char != new_string[-1]:
        new_string += char

print(new_string)
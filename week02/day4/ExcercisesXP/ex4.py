# Create a function that accepts a number between 1 and 100 and generates another number randomly between 1 and 100. Use the random module.
# Compare the two numbers, if it’s the same number, display a success message, otherwise show a fail message and display both numbers.

import random

def make_random_number(number=100):
    new_number = random.randrange(1, 100)
    if new_number == number:
        print("Success!")
    else:
        print(f"Fail! Your number:{number}, random number: {new_number}")


make_random_number(50)

# Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
# The function should print a sentence summarizing the size of the shirt and the message printed on it, such as "The size of the shirt is <size> and the text is <text>"
# Call the function make_shirt().

# Modify the make_shirt() function so that shirts are large by default with a message that reads “I love Python” by default.
def make_shirt(size="L", message="I love Python"):
    print(f"The size of the shirt is {size} and the text is {message}")

# Call the function, in order to make a large shirt with the default message
make_shirt()

# Make medium shirt with the default message
make_shirt("M")

# Make a shirt of any size with a different message.
make_shirt("XS", "Hello Kitty")

# Bonus: Call the function make_shirt() using keyword arguments.
make_shirt(message="kwargs are cool", size="XXL")
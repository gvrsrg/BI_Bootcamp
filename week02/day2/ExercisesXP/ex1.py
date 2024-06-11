# Create a set called my_fav_numbers with all your favorites numbers.
my_fav_numbers = {2,3,5,7,11,13,17,19,23,29,31,37}
print(my_fav_numbers)

# Add two new numbers to the set.
my_fav_numbers.add(73)
my_fav_numbers.add(97)
print(my_fav_numbers)

# Remove the last number.
my_fav_numbers = list(my_fav_numbers)
my_fav_numbers.pop()
my_fav_numbers = set(my_fav_numbers)

print(my_fav_numbers)

# Create a set called friend_fav_numbers with your friend’s favorites numbers.
friend_fav_numbers = {4,9,16,25,36,49,64,81}

# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)
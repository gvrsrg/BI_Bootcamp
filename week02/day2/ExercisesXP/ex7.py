# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
user_input = input("What are your favorit fruits? ")

# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
fruit_list = user_input.lower().split(" ")

# Now that we have a list of fruits, ask the user to input a name of any fruit.
user_fruit = input("Enter fruit: ")

# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.
if user_fruit.lower() in fruit_list:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")


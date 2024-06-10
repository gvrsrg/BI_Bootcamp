# Using the list below :

# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

# The deli has run out of pastrami, use a while loop to remove all occurrences of “Pastrami sandwich” from sandwich_orders.
# We need to prepare the orders of the clients:
# Create an empty list called finished_sandwiches.
# One by one, remove each sandwich from the sandwich_orders while adding them to the finished_sandwiches list.
# After all the sandwiches have been made, print a message listing each sandwich that was made, such as:
# I made your tuna sandwich
# I made your avocado sandwich
# I made your egg sandwich
# I made your chicken sandwich



sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

to_remove = "Pastrami sandwich"

while to_remove in sandwich_orders:
    sandwich_orders.remove(to_remove)

finished_sandwiches = []

while len(sandwich_orders)>0:
    made_sandwich = sandwich_orders[0]
    finished_sandwiches.append(made_sandwich)
    sandwich_orders.remove(made_sandwich)

for sandwich in finished_sandwiches:
    print(f"I made your {sandwich.lower()}")
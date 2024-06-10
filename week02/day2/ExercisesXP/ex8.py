# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

new_topping = ""
toppings = []
PIZZA_PRICE = 10
TOPPING_PRICE = 2.5


while not (new_topping.lower()=="quit"):
    new_topping = input("Enter the name of new topping: ")
    if new_topping.lower()=="quit":
        break
    toppings.append(new_topping)
    print(f"I will add {new_topping} to your pizza")

number_of_toppings = len(toppings)

print(f"  You will get pizza {'without ' if number_of_toppings==0 else f'with {number_of_toppings}' } {'topping' if number_of_toppings==1 else 'toppings'}")
if number_of_toppings>0:
    print(f"  Your toppings are: {', '.join(toppings)}")
print(f"  Your total is: {PIZZA_PRICE + number_of_toppings*TOPPING_PRICE}")
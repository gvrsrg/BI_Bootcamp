# Create a file called menu_editor.py , which will have the following functions:
# show_user_menu() - this function should display the program menu (not the restaurant menu!), and ask the user to :
# View an Item (V)
# Add an Item (A)
# Delete an Item (D)
# Update an Item (U)
# Show the Menu (S)
# Call the appropriate function that matches the user’s input.

# add_item_to_menu() - this function should ask the user to input the item’s name and price. 
# This function will not interact with the menu itself, but simply create a MenuItem object
# and call the appropriate function from the MenuItem object.
# If the item was added successfully print a message which states: item was added successfully.

# remove_item_from_menu()- this function should ask the user to input the name of the item they want to remove from the restaurant’s menu.
# This function will not interact with the menu itself, but simply create a MenuItem object 
# and call the appropriate function from the MenuItem object.
# If the item was deleted successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

# update_item_from_menu()- this function should ask the user to input the name and price of the item they want to update
# from the restaurant’s menu, as well as to input the name and price they want to change them with.
# This function will not interact with the menu itself, but simply create a MenuItem object 
# and call the appropriate function from the MenuItem object.
# If the item was updated successfully – print a message to let the user know this was completed.
# If not – print a message which states that there was an error.

# show_restaurant_menu() - print the restaurant’s menu.
from menu_item import MenuItem

def show_user_menu():
    answer = ""
    while answer.upper() != 'E':
        print("View an Item (V)\nAdd an Item (A)\nDelete an Item(D)\nUpdate an Item (U)\nShow the Menu (S)\nExit(E)")
        answer = input("Please choose an option: ")
        if answer == "V":
            view_item()
        elif answer == "A":
            add_item_to_menu()
        elif answer == "D":
            remove_item_from_menu()
        elif answer == "U":
            update_item_from_menu()
        elif answer == "S":
            show_restaurant_menu()
        elif answer == "E":
            print("Thank you for using our restaurant menu editor!")
        else:
            print("Invalid input. Please try again.")

def add_item_to_menu():
    name = input("Please enter the name of the item you would like to add: ")
    price = input("Please enter the price of the item you would like to add: ")
    item = MenuItem(name, price)
    item.save()
    print("Item was added successfully!")

def remove_item_from_menu():
    name = input("Please enter the name of the item you would like to remove: ")
    item = MenuItem(name)
    item.delete()
    print("Item was removed successfully!")

def view_item():
    name = input("Please enter the name of the item you would like to view: ")
    item = MenuItem(name)
    print(item)

def update_item_from_menu():
    name = input("Please enter the name of the item you would like to update: ")
    price = input("Please enter the new price of the item you would like to update: ")
    item = MenuItem(name, price)

def show_restaurant_menu():
    pass        


    

    




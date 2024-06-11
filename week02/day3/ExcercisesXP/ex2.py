# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

PRICE_3 = 0
PRICE_12 = 10
PRICE_FULL = 15

# Given the following object:

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# How much does each family member have to pay ?
family_total = 0
for name, age in family.items():
    if age<3:
        family_total += PRICE_3
    elif age<=12:
        family_total += PRICE_12
    else:
        family_total += PRICE_FULL


# Print out the family’s total cost for the movies.
print(f"Your family's total is ${family_total}")

# Bonus: Ask the user to input the names and ages instead of using the provided family variable 
new_family = {}
family_size = int(input("How many family members are there today at the movie theater? "))
family_total = 0

# (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).
for i in range(1, family_size+1):
    name = (input(f"What is your name? "))
    age = int(input(f"How old are you, {name}? "))
    new_family[name] = age

print(new_family)



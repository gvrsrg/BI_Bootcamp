# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.
PRICE_3 = 0
PRICE_12 = 10
PRICE_FULL = 15

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.


family_size = int(input("How many family members are there today at the movie theater? "))
family_total = 0
for i in range(1, family_size+1):
    age = int(input(f"How old if family member #{i}? "))
    if age<3:
        family_total += PRICE_3
    elif age<=12:
        family_total += PRICE_12
    else:
        family_total += PRICE_FULL

print(f"Your family's total is ${family_total}")


# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list.
teenagers = ["Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona", "George", "Hannah", "Ian", "Julia"]
to_remove = []

for teenager in teenagers:
    teen_age = int(input(f"How old are you, {teenager}? "))
    if 16 < teen_age < 21:
        to_remove.append(teenager)

teenagers = [item for item in teenagers if item not in to_remove]

print(teenagers)

###########################
#   
#   My comments
#
# We cannot remove elements from list while we iterating through it, becouse it will change size of the list, and we will skip some elements
# And also kind of strange condition for age, usually it is just one number - minimal age.
#
###########################
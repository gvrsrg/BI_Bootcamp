# Ask the user for 3 numbers and print the greatest number.
#     Test Data
#     Input the 1st number: 25
#     Input the 2nd number: 78
#     Input the 3rd number: 87

#     The greatest number is: 87

import inflect
p = inflect.engine()

number_list = []
for i in range(1,4):
    number = int(input(f"Input the {p.ordinal(i)} number: "))
    number_list.append(number)

max_number = max(number_list)
print(f"Max number is {max_number}")

# Exercise 1: Concatenate Lists
# Instructions
# Write code that concatenates two lists together without using the + sign.

list1 = [i for i in range(15)]
list2 = [i for i in range(15,30)]

list3 = list1.copy()
list3.extend(list2)

print(list3)
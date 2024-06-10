#Given a tuple which value is integers, is it possible to add more integers to the tuple?

#Not directly, but with converting tuple to list, adding new elements and then converting list back to tuple

a_tuple = (1,2,3,4,5)
print(a_tuple)
a_tuple = list(a_tuple)
a_tuple.append(6)
a_tuple.append(7)
a_tuple.append(8)
a_tuple=tuple(a_tuple)
print(a_tuple)

import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728

list_of_complements = [target_number - item for item in list_of_numbers]

common_terms = [x for x in list_of_numbers if x in list_of_complements]

print(len(common_terms))

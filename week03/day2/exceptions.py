my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]

list_sum = 0
for item in my_list:
    
    try:
        list_sum += item
    except TypeError:
        print(f"Skipping {item} because it's not a number")



print(list_sum)
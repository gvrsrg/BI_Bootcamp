#Use a for loop to print all numbers from 1 to 20, inclusive.
for i in range(1,21):
    print(i)


#Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.
list_20 = [i for i in range(1,21)]
for i in list_20:
    if list_20.index(i)%2==0:
        print(i)

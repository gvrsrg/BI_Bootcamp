# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

for num in range(1500, 2501):
    if num % 5 == 0 or num % 7 == 0: 
        # if it should be 5 and 7 simultaneously, then must change condition from "or" to "and",
        #  or better leave one condition num % 35 == 0
        print(num)
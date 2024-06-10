import random
string_length = 10

input_string = input("Enter string:")
if len(input_string) < string_length:
    print("The string is not long enough.")
elif len(input_string) > string_length:
    print("The string is too long.")
else:
        
    print(input_string[0]+input_string[-1])

    for i in range(string_length+1):
        print(input_string[:i])
    
    shuffled_string = list(input_string)
    random.shuffle(shuffled_string)
    shuffled_string = ''.join(shuffled_string)
    print(f"New string: {shuffled_string}")

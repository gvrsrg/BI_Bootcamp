
magic_number = 0

while (not(1 < magic_number < 100)):
    magic_number = int(input("Enter a number between 1 and 100:"))
    if 1 < magic_number < 100:
        break
    elif magic_number == -1:
        exit
    else:
        print("Number is not in a range. For exit enter -1")

if magic_number % 15 == 0 :
    print("FizzBuzz")
elif magic_number % 3 == 0:
    print("Fizz")
elif magic_number % 5 == 0:
    print("Buzz")
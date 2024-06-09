my_name = "Sergey"

user_name = input("What's your name? ")

if user_name == my_name:
    print(f"Wow, {user_name}, we have the same name! Are you my long-lost twin?")
else:
    print(f"Nice to meet you, {user_name}! Did you know I once met someone named {user_name}? They were quite the character!")

if user_name.lower() == "bob":
    print("Bob? Like Bob the Builder? Can we fix it? Yes, we can!")
elif user_name.lower() == "alice":
    print("Alice? Are you planning a trip to Wonderland anytime soon?")
elif user_name.lower() == "ralph":
    print("Are you going to break the Internet?")
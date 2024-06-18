# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.

from faker import Faker

def add_users(num, user_list):
    fake = Faker()
    for _ in range(num):
        user_list.append({
            'name': fake.name(),
            'address': fake.address(),
            'language_code': fake.language_code()
            })

def main():
    users = []
    add_users(10, users)
    print(users)

    add_users(5, users)
    print(users)

if __name__ == "__main__":
    main()


# Using this class

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Instantiate three Cat objects using the code provided above.
# Outside of the class, create a function that finds the oldest cat and returns the cat.
# Print the following string: “The oldest cat is <cat_name>, and is <cat_age> years old.”. Use the function previously created.

def find_oldest_v1(cats: list[Cat]):
    oldest = cats[0]
    for cat in cats[1:]:
        if cat.age > oldest.age:
            oldest = cat
    return oldest

def find_oldest_v2(cats: list[Cat]):
    oldest = max(cats, key=lambda x: x.age)
    return oldest


def main():
    cat1 = Cat("Meow", 4)
    cat2 = Cat("Purrr", 6)
    cat3 = Cat("Kitty", 5)

    cats = [cat1, cat2, cat3]

    oldest_cat = find_oldest_v1(cats)

    print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age}")

    oldest_cat = find_oldest_v2(cats)

    print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age}")


if __name__ == "__main__":
    main()

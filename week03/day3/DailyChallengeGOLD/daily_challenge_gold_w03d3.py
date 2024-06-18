# Ask a user for the following inputs 5 times:
# Name (string)
# Age (int)
# Score (int)
# Build a list of tuples using these inputs, each tuple should contain a name, age and score.
# Sort the list by the following priority Name > Age > Score.


def main():
    user_data = []
    for _ in range(5):
        name = input("Enter your name: ")
        age = int(input("Enter your age: "))
        score = int(input("Enter your score: "))
        user_data.append((name, age, score))

    
    user_data.sort(key=lambda x: (x[0], x[1], x[2]))
    print(user_data)

if __name__ == "__main__":
    main()


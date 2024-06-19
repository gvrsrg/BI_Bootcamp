import os
import random


def get_words_from_file(file_name):
    with open(file_name, 'r') as f:
        words = f.read().splitlines()
        return words
    
def get_random_sentence(length):
    path = os.path.dirname(os.path.realpath(__file__))
    filename = '\\sowpods.txt'


    words = get_words_from_file(path+filename)
    sentence = ' '.join(random.choice(words) for _ in range(length))
    return sentence.capitalize()

    pass

def main():
    print("Program constructs a sentence of certain length from the words in 'sowpods.txt'")
    try:
        length = int(input("What is the desired length of thre sentence(2-20)? "))
        if length < 2 or length > 20:
            raise ValueError
    except ValueError:
        print("Invalid input. Please enter a number between 2 and 20.")
        
    sentence = get_random_sentence(length)
    print(sentence)


if __name__ =="__main__":
    main()

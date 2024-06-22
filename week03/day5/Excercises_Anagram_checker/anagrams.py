import os
from anagram_checker import AnagramChecker
import itertools

def check_menu(answer=''):
    if answer in [1,2]:
        return True
    else:
        return False

def validate_input(word:str):
    if len(word.split()) > 1:
        print("Only one word allowed")
        return False
    if not word.isalpha():
        print("Only alphabetic characters are allowed. No numbers or special characters.")
        return False
    return True

def menu():
    valid_choice = False
    while not valid_choice:
        print("\n\nWelcome to Anagram Checker!")
        print("1. Generate all possible anagrams of a word")
        print("2. Quit")
        try:
            answer = int(input('Enter your choice:'))
        except ValueError:
            print("Invalid choice. Please enter a number.")
            continue
        
        valid_choice = check_menu(answer)

    return answer

def main():
    path = os.path.dirname(os.path.realpath(__file__))
    dictionary_full_name = path+"\\sowpods.txt"
    anagram_checker = AnagramChecker(dictionary_full_name)

    play_on = (menu() == 1)
    while play_on:
        valid_word = False
        while not valid_word:
            word = input("Enter a word to check for anagrams: ").strip()

            valid_word = validate_input(word)

        print(f'YOUR WORD: "{word.upper()}"')
        if anagram_checker.is_walid_word(word):
            print("this is a valid English word.")
        else:
            print("this is not a valid English word.")

        anagrams = anagram_checker.get_anagrams(word)
        if len(anagrams) > 0:
            print(f"Anagrams for the word {word.upper()} are: {', '.join(anagrams)}")
        else:
            print(f"No anagrams found for the word {word.upper()}")

        
        play_on = (menu() == 1)

if __name__ == "__main__":
    main()


import itertools

class AnagramChecker:
    def __init__(self, file_name):
        
        with open(file_name,"r") as file:
            self.words = file.read().splitlines()

    def is_walid_word(self, word:str):
        return word.upper() in self.words
    
    def is_anagram(self, word1, word2):
        return sorted(word1.upper()) == sorted(word2.upper())


    def get_anagrams(self, word):
        word = word.upper()
        permutations = [''.join(w) for w in list(itertools.permutations(word))]
        anagrams = [w for w in permutations if sorted(w) == sorted(word) and
                    w != word and self.is_walid_word(w)]
        return anagrams
    
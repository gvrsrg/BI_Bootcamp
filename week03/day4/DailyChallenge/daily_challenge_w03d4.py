# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.
from collections import Counter
import os

class Text:
    def __init__(self, text):
        self.text = text

    def words_counter(self):
        words = self.text.split()
        word_freq = Counter(words)
        return word_freq
    
    def word_frequency(self, word):
        word_freq = self.words_counter()
        if word in word_freq:
            return word_freq[word]
        else:
            return None

    def most_common(self):
        word_freq = self.words_counter()
        return word_freq.most_common(1)[0][0]
    
    def all_unique(self):
        word_freq = self.words_counter()
        return list(word_freq.keys())
    
    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r') as f:
            return Text(f.read())
        
def main():
    path = os.path.dirname(os.path.realpath(__file__))
    text_full_name = path+"\\the_stranger.txt"

    my_text = Text.from_file(text_full_name)
    print(my_text.word_frequency("help"))
    most_common_word = my_text.most_common()
    print(f"Most common word is {most_common_word}, it has {my_text.word_frequency(most_common_word)} occurencies")
    print(f"Text has {len(my_text.all_unique())} unique words")


if __name__ == "__main__":
    main()

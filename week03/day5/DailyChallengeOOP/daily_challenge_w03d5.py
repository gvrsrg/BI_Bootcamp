# Part 2: Create A Deck Of Cards Class.
# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

import random

class Card():
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __str__(self) -> str:
        return f"{self.value} of {self.suit}"

class Deck():
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    values = ['A', '2', '3', '4', '5', '6','7','8','9','10','J','Q','K']

    def __init__(self):
        self.cards = []

    def __str__(self) -> str:
        title_line = [' '] + Deck.values
        str_deck = [" ".join(title_line)]
        for suit in Deck.suits:
            str_line = [suit[0]]
            for value in Deck.values:
                add_char = " "*(len(value)-1)
                if len(list(filter(lambda card: (card.value == value) and (card.suit == suit), self.cards)))>0:
                    str_line.append(add_char+"+")
                else:
                    str_line.append(add_char+" ")
            str_deck.append(" ".join(str_line))
        

        return "\n".join(str_deck)

        
    def shuffle(self):
        self.cards = [Card(suit, value) for suit in Deck.suits for value in Deck.values]
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) > 0:
            return self.cards.pop()
        else:
            return "No more cards in the deck"
        

    
def main():
    my_deck = Deck()
    my_deck.shuffle()

    players = ["Koby", "Rivka"]

    for _ in range(5):
        for player in players:
            card = my_deck.deal()
            print(f"{player} got {card}")
    

    print(my_deck)


if __name__ =="__main__":
    main()


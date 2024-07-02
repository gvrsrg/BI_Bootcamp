#rock-paper-scissors
import random

class Game():
    options = {
        '1':"rock",
        '2':"paper",
        '3':"scissors"
    }
    
    def __init__(self):
        self.results = {
        'win':0,
        'loss':0,
        'draw':0
        }
    
# get_user_item(self) – Ask the user to select an item (rock/paper/scissors).
# Keep asking until the user has selected one of the items – use data validation and looping. Return the item at the end of the function.    

    def get_user_item(self):
        valid_choice = False
        while not valid_choice:
            user_item = input("""Enter your choice 
                              1. Rock
                              2. Paper
                              3. Scissors): 
                              """)
            valid_choice = user_item.lower() in ['1', '2', '3']
            if not valid_choice:
                print("Invalid choice, please try again.")
        
        return Game.options[user_item]
            
        
    def get_computer_item(self):
        items = ['rock', 'paper', 'scissors']
        return random.choice(items)
    
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            self.results['draw'] += 1
            return "draw"
        elif (user_item == 'rock' and computer_item == 'scissors') or \
        (user_item == 'scissors' and computer_item == 'paper') or \
        (user_item == 'paper' and computer_item == 'rock'):
            self.results['win'] += 1
            return "win"
        else:
            self.results['loss'] += 1
            return "loss"
    
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        return result
    

        
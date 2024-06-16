class Farm():
    def __init__(self, farmer_name) -> None:
        self.owner = farmer_name
        self.animals = {}

    def add_animal(self, name, count=1):
        if name in self.animals:
            self.animals[name] += count
        else:
            self.animals[name] = count

    def get_info(self):
        title = f"{self.owner}'s farm\n\n"
        animals_info = ""
        for animal, count in self.animals.items():
            animals_info += f"{animal} : {count}\n"
        
        return title + animals_info + "\n    E-I-E-I-0!"
    
    def get_animals_types(self):
        types = list(self.animals.keys())
        types.sort()
        return types
    
    def get_short_info(self):
        animals_text = ', '.join([key + 's' if value > 1 else key for key, value in self.animals.items()])
        return f"{self.owner}'s farm has {animals_text}."
    
# Add a method called get_animal_types to the Farm class. 
# This method should return a sorted list of all the animal types (names) in the farm. 
# With the example above, the list should be: ['cow', 'goat', 'sheep'].

# Add another method to the Farm class called get_short_info. 
# This method should return the following string: “McDonald’s farm has cows, goats and sheeps.”. 
# The method should call the get_animal_types function to get a list of the animals.
# Note : In English the plural form of the word “sheep” is sheep. 
# But for the purpose of the exercise, let’s say that if there is more than 1 animal, an “s” should be added at the end of the word.    

def main():
    macdonald = Farm("McDonald")
    macdonald.add_animal('cow',5)
    macdonald.add_animal('sheep')
    macdonald.add_animal('sheep')
    macdonald.add_animal('goat', 12)
    print(macdonald.get_info())

    print(macdonald.get_animals_types())

    print(macdonald.get_short_info())


if __name__ == "__main__":
    main()
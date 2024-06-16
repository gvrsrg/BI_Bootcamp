# Create a class called Zoo.
# In this class create a method __init__ that takes one parameter: zoo_name.
# It instantiates two attributes: animals (an empty list) and name (name of the zoo).
# Create a method called add_animal that takes one parameter new_animal. This method adds the new_animal to the animals list 
# as long as it isn’t already in the list.
# Create a method called get_animals that prints all the animals of the zoo.
# Create a method called sell_animal that takes one parameter animal_sold. 
# This method removes the animal from the list and of course the animal needs to exist in the list.
# Create a method called sort_animals that sorts the animals alphabetically and groups them together based on their first letter.
# Example

# { 
#     1: "Ape",
#     2: ["Baboon", "Bear"],
#     3: ['Cat', 'Cougar'],
#     4: ['Eel', 'Emu']
# }


# Create a method called get_groups that prints the animal/animals inside each group.

# Create an object called ramat_gan_safari and call all the methods.
# Tip: The zookeeper is the one who will use this class.
# Example
# Which animal should we add to the zoo --> Giraffe
# x.add_animal(Giraffe)

class Zoo():
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        print("The animals in the zoo are:")
        for animal in self.animals:
            print(animal)
    
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
    
    def sort_animals(self):
        self.animals.sort()
        groups = {}
        for i, animal in enumerate(self.animals, 1):
            if animal[0] not in groups:
                groups[animal[0]] = [animal]
            else:
                groups[animal[0]].append(animal)
        return groups
    
    def get_groups(self):
        groups = self.sort_animals()
        for key, value in groups.items():
            print(f"Group {key}: {', '.join(animal for animal in value)}")

def main():
    ramat_gan_safari = Zoo("Ramat Gan Safari")
    ramat_gan_safari.add_animal("Giraffe")
    ramat_gan_safari.add_animal("Bear")
    ramat_gan_safari.add_animal("Ape")
    ramat_gan_safari.add_animal('Eel')
    ramat_gan_safari.add_animal("Baboon")
    ramat_gan_safari.add_animal('Cat')
    ramat_gan_safari.add_animal('Emu')
    ramat_gan_safari.add_animal('Cougar')

    ramat_gan_safari.get_groups()

    ramat_gan_safari.sell_animal("Cat")

if __name__ == "__main__":
    main()

    
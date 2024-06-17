# Create a new python file and import your Dog class from the previous exercise.
# In the new python file, create a class named PetDog that inherits from Dog.
# Add an attribute called trained to the __init__ method, this attribute is a boolean and the value should be False by default.
# Add the following methods:
# train: prints the output of bark and switches the trained boolean to True

# play: takes a parameter which value is a few names of other Dog instances (use *args). 
# The method should print the following string: “dog_names all play together”.

# do_a_trick: If the dog is trained the method should print one of the following sentences at random:
# “dog_name does a barrel roll”.
# “dog_name stands on his back legs”.
# “dog_name shakes your hand”.
# “dog_name plays dead”.

import ex2 as dogs
import random


class PetDog(dogs.Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True
    
    def play(self, *dog_names):
        print(f"{self.name} and {', '.join(dog_names)} all play together")

    def do_a_trick(self):
        tricks = [
            "does a barrel roll",
            "stands on his back legs",
            "shakes your hand",
            "plays dead"
            ]
        if self.trained:

            print(f"{self.name} {random.choice(tricks)}")
        else:
            print(f"{self.name} is not trained yet")


def main():
    dogs = [PetDog("Rex", 7, 15, True), PetDog("Jack", 5, 20), PetDog("Pluto", 15, 50, True), ]


    for dog in dogs:
        dog.do_a_trick()
        if not dog.trained:
            dog.train()
            dog.do_a_trick()
        
        dog.play("Bob", "Skippy", "Bruiser")




if __name__ =="__main__":
    main()

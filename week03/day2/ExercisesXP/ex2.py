# Create a class called Dog with the following attributes name, age, weight.
# Implement the following methods in the Dog class:
# bark: returns a string which states: “<dog_name> is barking”.
# run_speed: returns the dogs running speed (weight/age*10).
# fight : takes a parameter which value is another Dog instance, called other_dog. This method returns a string stating which dog won the fight.
# The winner should be the dog with the higher run_speed x weight.

# Create 3 dogs and run them through your class.
from __future__ import annotations

class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"
    
    def run_speed(self):
        return self.weight / (self.age * 10)
    
    def fight(self, other_dog: Dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if my_power > other_power:
            return f"{self.name} wins the fight"
        elif my_power < other_power:
            return f"{other_dog.name} wins the fight"
        else:
            return "It's a tie"

def main():
    dogs = [Dog("Rex", 7, 15), Dog("Jack", 5, 20), Dog("Pluto", 15, 50),]

    for dog in dogs:
        for contestant in dogs:
            if dog != contestant:
                print(f"{dog.name} vs {contestant.name}: {dog.fight(contestant)}")




if __name__ =="__main__":
    main()

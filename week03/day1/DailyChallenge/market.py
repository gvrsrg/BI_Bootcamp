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


def main():
    macdonald = Farm("McDonald")
    macdonald.add_animal('cow',5)
    macdonald.add_animal('sheep')
    macdonald.add_animal('sheep')
    macdonald.add_animal('goat', 12)
    print(macdonald.get_info())

if __name__ == "__main__":
    main()
# Create a class called TheIncredibles. This class should inherit from the Family class:
# This is no random family they are an incredible family, therefore the members attributes, will be a list of dictionaries containing the additional keys : 
# power and incredible_name. (See Point 4)
# Add a method called use_power, this method should print the power of a member only if they are over 18 years old.
# If not raise an exception (look up exceptions) which stated they are not over 18 years old.
# Add a method called incredible_presentation which :
# Print a sentence like “*Here is our powerful family **”
# Prints the family’s last name and all the members’ details (ie. use the super() function, to call the family_presentation method)

# Create an instance of the Incredibles class, with the “Incredibles” last name, and the below members.

#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
#     ]

# Call the incredible_presentation method.
# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.
# Call the incredible_presentation method again.

from ex4 import Family

class TheIncredibles(Family):
    def __init__(self, last_name, members,):
        super().__init__(last_name, members)
        
    def use_power(self, name):
        member = list(filter(lambda person: person['name'] == name, self.members))
        if len(member) == 0:
            return f"There is no {name} in {self.last_name}'s family"
        elif member[0]['age'] >= 18:
            print(f"{name} has the power to {member[0]['power']}")
        else:
            raise Exception(f"{name} is not over 18 years old")

    def incredible_presentation(self):
        print("*Here is our powerful family **")
        super().family_presentation()






def main():
    family_members= [
         {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
         {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]

    incredible_family = TheIncredibles("Cohen", family_members)

    incredible_family.family_presentation()

    incredible_family.born(name="Jack", age=0, gender="Male", is_child=True, power="Unknown Power", incredible_name="Baby Jack")

    incredible_family.family_presentation()

    for name in ["Sarah", "Jack", "Michael"]:
        try:
            incredible_family.use_power(name)
        except Exception as e:
            print(e)




if __name__ =="__main__":
    main()
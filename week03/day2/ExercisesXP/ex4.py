# Create a class called Family and implement the following attributes:

# members: list of dictionaries
# last_name : (string)

# Implement the following methods:

# born: adds a child to the members list (use **kwargs), don’t forget to print a message congratulating the family.
# is_18: takes the name of a family member as a parameter and returns True if they are over 18 and False if not.
# family_presentation: a method that prints the family’s last name and all the members’ details.

# Create an instance of the Family class, with the last name of your choice, and the below members. Then call all the methods you created in Point 2.

#     [
#         {'name':'Michael','age':35,'gender':'Male','is_child':False},
#         {'name':'Sarah','age':32,'gender':'Female','is_child':False}
#     ]

class Family:
    def __init__(self, last_name, members=None):
        self.last_name = last_name
        self.members = members if members is not None else []
    
    def born(self, **new_born):
        new_born['age'] = 0
        new_born['is_child'] = True

        self.members.append(new_born)
        print(f"Congratulations to the {self.last_name} family on the new addition!")

    def is_18(self, name):
        member = list(filter(lambda person: person['name'] == name, self.members))
        if len(member) == 0:
            return f"There is no {name} in {self.last_name}'s family"
        else:
            return member[0]['age'] >= 18

    def family_presentation(self):
        print(f"Family Name: {self.last_name}")
        for member in self.members:
            #print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")
            print(f"{member}")
            
        

def main():
    family_members= [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]

    family = Family("Cohen", family_members)

    family.family_presentation()

    family.born(name="Yossi", age=0, gender="Male", is_child=True)

    family.family_presentation()

    for name in ["Sarah", "Yossi", "Kobi"]:
        print(f"Is {name} 18+? {family.is_18(name)}")


if __name__ =="__main__":
    main()

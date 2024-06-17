# Try to recreate the class explained below:

# We have a class called Door that has an attribute of is_opened declared when an instance is initiated.

# We can create a class called BlockedDoor that inherits from the base class Door.

# We just override the parent class's functions of open_door() and close_door() with our own BlockedDoor version of those functions,
# which simply raises an Error that a blocked door cannot be opened or closed.

class Door:
    def __init__(self):
        self.is_opened = False
    
    def open_door(self):
        self.is_opened = True

    def close_door(self):
        self.is_opened = False

class BlockedDoor(Door):
    def open_door(self):
        raise Exception("A blocked door cannot be opened")
    
    def close_door(self):
        raise Exception("A blocked door cannot be closed")
    
def main():
    door = Door()

    blocked_door = BlockedDoor()

    blocked_door.open_door()

if __name__ == "__main__":
    main()

# Create a class called Phone. This class takes a parameter called phone_number. 
# When instantiating an object create an attribute called call_history which value is an empty list.

# Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters. 
# The method should print a string stating who called who, and add this string to the phone’s call_history.

# Add a method called show_call_history. This method should print the call_history.

# Add another attribute called messages to your __init__() method which value is an empty list.

# Create a method called send_message which is similar to the call method. 
# Each message should be saved as a dictionary with the following keys:
# to : the number of another Phone object
# from : your phone number (also a Phone object)
# content

# Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)
from __future__ import annotations

class Phone():
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []
    
    def call(self, other_phone: Phone):
        call_string = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_string)
        self.call_history.append(call_string)
    
    def show_call_history(self):
        print(f"Call history from {self.phone_number}:")
        for call in self.call_history:
            print(call)
    
    def receive_message(self, message):
        self.messages.append(message)

    def send_message(self, message_to: Phone, content):
        message = {
            "to": message_to.phone_number,
            "from": self.phone_number,
            "content": content
            }
        self.messages.append(message)
        message_to.receive_message(message)

    def show_outgoing_messages(self):
        print(f"Outgoung messages from {self.phone_number}:")
        for message in self.messages:
            if message["from"] == self.phone_number:
                print(f"To: {message['to']}, Content: {message['content']}")
    
    def show_incoming_messages(self):
        print(f"Incoming messages to {self.phone_number}:")
        for message in self.messages:
            if message["to"] == self.phone_number:
                print(f"From: {message['from']}, Content: {message['content']}")
    
    def show_messages_from(self, from_phone: Phone):
        print(f"Messages to {self.phone_number} from {from_phone.phone_number}:")
        for message in self.messages:
            if message["from"] == from_phone.phone_number and message["to"] == self.phone_number:
                print(f"Content: {message['content']}")

def main():
    phone1 = Phone("1234567890")
    phone2 = Phone("9876543210")
    phone3 = Phone("5554321")
    
    phone1.call(phone2)
    phone1.call(phone3)
    phone1.call(phone2)
    phone1.call(phone2)
    phone1.call(phone3)

    phone2.call(phone1)
    phone2.call(phone1)
    phone2.call(phone1)
    phone2.call(phone3)
    phone2.call(phone3)

    phone3.call(phone2)
    phone3.call(phone1)
    phone3.call(phone2)
    phone3.call(phone2)
    phone3.call(phone1)

    phone2.send_message(phone2,"hi")
    phone1.send_message(phone2,"hello")
    phone2.send_message(phone2,"wanna buy my ferrari?")
    phone1.send_message(phone2,"how much")
    phone2.send_message(phone2,"$500000")
    phone1.send_message(phone2,"im busy at the moment")

    phone1.send_message(phone3,"meet in 5")
    phone3.send_message(phone1,"where?")
    phone1.send_message(phone3,"at the park")
    phone1.send_message(phone3,"where r u")


    phone2.send_message(phone3,"wanna ride?")
    phone3.send_message(phone2,"where?")
    phone2.send_message(phone3,"to the moon")
    phone3.send_message(phone2,"im busy, going to park")


    phone1.show_call_history()

    phone1.show_incoming_messages()

    phone1.show_outgoing_messages()

    phone1.s

    phone1.show_messages_from(phone3)

    phone2.show_messages_from(phone1)

    phone3.show_messages_from(phone1)




if __name__ == "__main__":
    main()

# Exercise 6 : Birthday And Minutes
# Instructions
# Create a function that accepts a birthdate as an argument (in the format of your choice),
# then displays a message stating how many minutes the user lived in his life.

import datetime

def minutes_lived(bday):
    current_date = datetime.datetime.now()
    life = current_date - bday

    seconds = life.total_seconds()
    minutes = int(seconds) // 60
    print(f"You lived {minutes} minutes")



def main():
        
    birth_year = int(input("Which year were you born:"))
    birth_month = int(input("Which month(1-12):"))
    birth_day = int(input("Which day:"))

    birthday = datetime.datetime(birth_year, birth_month, birth_day)

    minutes_lived(birthday)



if __name__ =="__main__":
    main()


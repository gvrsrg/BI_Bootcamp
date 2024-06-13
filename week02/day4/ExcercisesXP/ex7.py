import random
# Create a function called get_random_temp().
# This function should return an integer between -10 and 40 degrees (Celsius), selected at random.
# Test your function to make sure it generates expected results.

def get_season_by_month(month_number):
    seasons = ['winter', 'spring', 'summer', 'autumn']

    if not (1<=month_number<=12):
        return ""
    else:
        season = month_number % 12 // 3
        return seasons[season]


def get_random_temp(season="", month=0):
    '''
    If season is determined - using season.
    If not - figuring season by month number.
    '''

    min_temp, max_temp = -10, 40
    if season == "":
        season = get_season_by_month(month)

    seasonal_temperatures = {
        "winter":{
            "min_temp":-10,
            "max_temp":10
        },
        "spring":{
            "min_temp":10,
            "max_temp":25
        },
        "summer":{
            "min_temp":25,
            "max_temp":40
        },
        "fall":{
            "min_temp":10,
            "max_temp":25
        },
        "autumn":{
            "min_temp":10,
            "max_temp":25
        }
    }
    if season == "":
        min_temp, max_temp = -10, 40
    else:
        season_record = seasonal_temperatures[season] 
        min_temp, max_temp = season_record["min_temp"], season_record["max_temp"]

    return(round(random.uniform(min_temp, max_temp), 2))


def show_advice(degrees_c):
    if degrees_c < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif 0 <= degrees_c <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif 17 <= degrees_c <= 23:
        print("It's a pleasant day! A light jacket should be enough.")
    elif 24 <= degrees_c <= 32:
        print("Warm weather! Stay hydrated and wear light clothing.")
    elif 33 <= degrees_c <= 40:
        print("It's really hot! Make sure to stay cool and drink plenty of water.")
    else:
        print("Extreme temperature! Take necessary precautions to stay safe.")


# Create a function called main().


# Inside this function, call get_random_temp() to get a temperature, and store its value in a variable.
# Inform the user of the temperature in a friendly message, eg. “The temperature right now is 32 degrees Celsius.”
def main():
    curr_temp = get_random_temp()
    print(f"The temperature right now is {curr_temp} degrees Celsius.")
    show_advice(curr_temp)


    curr_temp = get_random_temp("winter")
    print(f"The temperature right now is {curr_temp} degrees Celsius.")
    show_advice(curr_temp)

    curr_temp = get_random_temp(month=6)
    print(f"The temperature right now is {curr_temp} degrees Celsius.")
    show_advice(curr_temp)


# Let’s add more functionality to the main() function. Write some friendly advice relating to the temperature:
# below zero (eg. “Brrr, that’s freezing! Wear some extra layers today”)
# between zero and 16 (eg. “Quite chilly! Don’t forget your coat”)
# between 16 and 23
# between 24 and 32
# between 32 and 40



# Change the get_random_temp() function:
# Add a parameter to the function, named ‘season’.
# Inside the function, instead of simply generating a random number between -10 and 40, set lower and upper limits based on the season, 
# eg. if season is ‘winter’, temperatures should only fall between -10 and 16.
# Now that we’ve changed get_random_temp(), let’s change the main() function:
# Before calling get_random_temp(), we will need to decide on a season, so that we can call the function correctly. 
# Ask the user to type in a season - ‘summer’, ‘autumn’ (you can use ‘fall’ if you prefer), ‘winter’, or ‘spring’.
# Use the season as an argument when calling get_random_temp().

# Bonus: Give the temperature as a floating-point number instead of an integer.
# Bonus: Instead of asking for the season, ask the user for the number of the month (1 = January, 12 = December). Determine the season according to the month.

main()
# Using this REST Countries API(https://restcountries.com/), create the functionality which will write 10 random countries to your database.

# These are the attributes which you should populate your tables with: name, capital, flag, subregion, population.

import requests

URL = "https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population"

response = requests.get(URL)

print(response.status_code)

data = list(response.content)

common_name = data[0]["name"]["common"]
capital = data[0]["capital"]
flag = data[0]["flag"]
subregion = data[0]["subregion"]
population = data[0]["population"]

print(f"{common_name}, {capital}, {flag}, {subregion}, {population}")
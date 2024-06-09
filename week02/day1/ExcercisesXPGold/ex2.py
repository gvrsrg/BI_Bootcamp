seasons = ['winter', 'spring', 'summer', 'autumn']

month = int(input("Enter month number: "))

if not (1<=month<=12):
    print("It is not a month number!")
else:
    season = month % 12 // 3
    print(seasons[season])
people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

#Using map and filter, try to say hello to everyone who's name is less than or equal to 4 letters
print(*list(map(lambda n: f"Hello, {n}\n ", filter(lambda n: len(n)<=4, people))))
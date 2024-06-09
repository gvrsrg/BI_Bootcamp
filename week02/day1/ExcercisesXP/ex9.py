height = int(input("How tall are you in cm:"))

if height>145:
    print(f"{height} is good height. You are tall enough to ride")
else:
    print(f"{height} is not enough to go to the rides, you need to grow {145-height} cm more.")


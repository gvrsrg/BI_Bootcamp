import os
print(os.getcwd())
path = os.path.dirname(os.path.realpath(__file__))


filelocation = path+"\\nameslist.txt"

with open(filelocation) as file:
    # Read the file line by line
    for line in file:
        print(line)

with open(filelocation) as file:   
    # Read only the 5th line of the file
    lines = file.readlines()
    print(lines[4])

with open(filelocation) as file:
    # Read only the 5 first characters of the file
    print(file.read(5))

with open(filelocation) as file:
    # Read all the file and return it as a list of strings. Then split each word
    lines = file.readlines()
    for line in lines:
        print(list(line))

with open(filelocation) as file:        
    # Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
    content = file.read()
    print("Darth: ", content.count("Darth"))
    print("Luke: ", content.count("Luke"))
    print("Lea: ", content.count("Lea"))

with open(filelocation,'a') as file:
    # Append your first name at the end of the file
    file.write("\nSergey")

with open(filelocation,'r+') as file:
    # Append "SkyWalker" next to each first name "Luke"
    content = file.read()
    file.seek(0)
    content = content.replace("Luke", "Luke SkyWalker")
    file.write(content)



# Using this list of magician’s names

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.
def show_magicians(m_list):
    for item in m_list:
        print(item)

show_magicians(magician_names)

# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.

def make_great(m_list):
    m_list[:] = list((map(lambda s: s+" The Great", m_list)))


# Call the function make_great().
make_great(magician_names)

# Call the function show_magicians() to see that the list has actually been modified.
show_magicians(magician_names)
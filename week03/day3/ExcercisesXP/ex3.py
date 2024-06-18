# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

import random
from string import ascii_letters as letters

random_string = ''.join(random.choice(letters) for _ in range(5))

print(random_string)

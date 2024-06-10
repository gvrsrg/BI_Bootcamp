# Recap – What is a float? What is the difference between an integer and a float?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# Can you think of another way to generate a sequence of floats?

float_list = [i*0.5+1.5 for i in range(8)]
print(float_list)
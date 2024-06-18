# Instructions :
# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the attributes of the circle - use a dunder method
# Be able to add two circles together, and return a new circle with the new radius - use a dunder method
# Be able to compare two circles to see which is bigger, and return a Boolean - use a dunder method
# Be able to compare two circles and see if there are equal, and return a Boolean- use a dunder method
# Be able to put them in a list and sort them
# Bonus (not mandatory) : Install the Turtle module, and draw the sorted circles

from math import pi, sqrt
import turtle


class Circle:
    def __init__(self, radius=0, diameter=0):
        if radius == 0:
            self.radius = diameter / 2
        else:
            self.radius = radius
    

    def __str__(self):
        return f"This circle's radius is {self.radius}"
    
    def square(self):
        return pi*self.radius**2
    
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(self.radius + other.radius)
        else:
            self.radius += other
            return self
    
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self.radius < other.radius
        else:
            return self.radius < other
        
    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        else:
            return self.radius > other

    def __eq__(self, value: object) -> bool:
        if isinstance(value, Circle):
            return self.radius == value.radius
        else:
            return self.radius == value
        
    def __sum__(self,other):
        return self.radius + other.radius
    

        

def draw_cicrles(circles_list, shift):
    if len(circles_list) == 0:
        return

    t = turtle.Turtle()
    t.penup()
    screen = turtle.Screen()

    t.goto(-screen.canvwidth+circles_list[0].radius, shift)
    t.pendown()
    prev_radius = 0
    for circle in circles_list:
        t.penup()
        radius = circle.radius
        shift = 2*sqrt(prev_radius*radius)
        t.setx(t.xcor()+shift)
        t.pendown()
        t.circle(radius) 
        prev_radius = radius
        


def main():
    circle1 = Circle(20)
    print(circle1)
    print(f"Circle's square is {circle1.square()}")

    circle2 = Circle(diameter=70)

    if circle2>circle1:
        print("Circle 2 is bigger than Circle 1")
    elif circle1>circle2:
        print("Circle 1 is bigger than Circle 2")
    else:
        print("Circles are equal")

    circle3 = circle1 + circle2
    print(circle3)
    print(f"Circle's square is {circle3.square()}")

    list_of_circles = [circle3, circle1, circle2, Circle(10), Circle(30)]

    screen = turtle.Screen()

    canvas_width = sum(c.radius for c in list_of_circles)+20
    canvas_height = max(c.radius for c in list_of_circles)+20

    screen.screensize(canvas_width, canvas_height)
    draw_cicrles(list_of_circles, canvas_height)
        

    list_of_circles.sort()
    draw_cicrles(list_of_circles, -canvas_height)

    turtle.exitonclick()    


if __name__ =="__main__":
    main()
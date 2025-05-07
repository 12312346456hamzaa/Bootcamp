import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def get_perimeter(self):
        return 2 * math.pi * self.radius

    def get_area(self):
        return math.pi * (self.radius ** 2)

    def print_definition(self):
        print("A circle is a shape with all points equidistant from its center.")


my_circle = Circle(3)
print(f"Perimeter: {my_circle.get_perimeter():.2f}")
print(f"Area: {my_circle.get_area():.2f}")
my_circle.print_definition()

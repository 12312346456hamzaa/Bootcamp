class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{self.name} sings: {sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{self.name} sings: {sounds}'

class Siamese(Cat):
    def __init__(self, name, age, eye_color="blue"):
        super().__init__(name, age)
        self.eye_color = eye_color

    def sing(self, sounds):
        return f'{self.name} sings: {sounds}'



bengal_cat = Bengal("Simba", 4)
chartreux_cat = Chartreux("Luna", 3)
siamese_cat = Siamese("Nina", 2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]

sara_pets = Pets(all_cats)

print("\n---- Promenade des chats ----")
sara_pets.walk()



#Exercice1:
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


#Exercice2:
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        if self_power > other_power:
            return f"{self.name} wins the fight against {other_dog.name}!"
        elif self_power < other_power:
            return f"{other_dog.name} wins the fight against {self.name}!"
        else:
            return f"The fight between {self.name} and {other_dog.name} is a draw!"

# Step 2: 
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 25)
dog3 = Dog("Max", 4, 18)

# Step 3: 
print(dog1.bark())
print(f"{dog2.name}'s speed: {dog2.run_speed()}")
print(dog1.fight(dog2))
print(dog3.fight(dog1))

#Exercice3 :
import random

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        my_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        if my_power > other_power:
            return f"{self.name} wins the fight"
        else:
            return f"{other_dog.name} wins the fight"


class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = [self.name] + list(args)
        print(f"{', '.join(dog_names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
            print(f"{self.name} {random.choice(tricks)}")


dog1 = PetDog("Fido", 3, 15)
dog2 = PetDog("Buddy", 4, 12)
dog3 = PetDog("Max", 2, 10)

dog1.train()        
dog1.play("Buddy", "Max")
dog1.do_a_trick()    

#Exercice4
class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""  

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []  

    def born(self, first_name, age):
        new_person = Person(first_name, age)
        new_person.last_name = self.last_name
        self.members.append(new_person)

    def check_majority(self, first_name):
        for person in self.members:
            if person.first_name == first_name:
                if person.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends.")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print("This person is not in the family.")

    def family_presentation(self):
        print(f"The {self.last_name} family includes:")
        for member in self.members:
            print(f"- {member.first_name}, {member.age} years old")

# --Test the classes 


smith_family = Family("Smith")


smith_family.born("Alice", 17)
smith_family.born("Bob", 20)
smith_family.born("Charlie", 15)


smith_family.check_majority("Alice")    
smith_family.check_majority("Bob")      
smith_family.check_majority("Charlie")  


smith_family.family_presentation()


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

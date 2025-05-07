class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        result = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            result += f"{animal} : {count}\n"
        result += "\n    E-I-E-I-0!"
        return result

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animals = self.get_animal_types()
        animal_list = []
        for animal in animals:
            if self.animals[animal] > 1:
                animal_list.append(animal + "s")
            else:
                animal_list.append(animal)
        if len(animal_list) > 1:
            return f"{self.name}'s farm has {', '.join(animal_list[:-1])} and {animal_list[-1]}."
        elif animal_list:
            return f"{self.name}'s farm has {animal_list[0]}."
        else:
            return f"{self.name}'s farm has no animals."


# Test_code
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.get_info())
print()
print(macdonald.get_short_info())

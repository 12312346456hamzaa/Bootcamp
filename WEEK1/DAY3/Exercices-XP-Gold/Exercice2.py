import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def get_reversed(self):
        return self.letters[::-1]

    def get_sorted(self):
        return sorted(self.letters)

    def generate_random_list(self):
        return [random.randint(0, 100) for _ in range(len(self.letters))]


my_list = MyList(['b', 'z', 'a', 'm'])

print("Liste d'origine :", my_list.letters)
print("Liste inversée :", my_list.get_reversed())
print("Liste triée :", my_list.get_sorted())
print("Liste aléatoire :", my_list.generate_random_list())

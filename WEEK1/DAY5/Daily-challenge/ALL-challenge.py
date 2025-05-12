#Circle
import math, turtle, random

class Circle:
    def __init__(self, *, radius=None, diameter=None):
        if radius: self._radius = float(radius)
        elif diameter: self._radius = float(diameter) / 2
        else: raise ValueError("Specify radius or diameter")

    @property
    def radius(self): return self._radius

    @property
    def diameter(self): return self._radius * 2

    def area(self): return math.pi * self._radius ** 2

    def __str__(self): return f"Circle(r={self.radius:.2f}, d={self.diameter:.2f}, A={self.area():.2f})"

    def __add__(self, other): return Circle(radius=self.radius + other.radius) if isinstance(other, Circle) else NotImplemented

    def __lt__(self, other): return self.radius < other.radius if isinstance(other, Circle) else NotImplemented

    def __eq__(self, other): return self.radius == other.radius if isinstance(other, Circle) else NotImplemented

def draw_sorted_circles(circles):
    t, y = turtle.Turtle(), -250
    t.speed(0)
    for c in circles:
        t.penup(); t.goto(0, y); t.pendown()
        t.color(random.choice(["red", "blue", "green", "orange", "purple"]))
        t.circle(c.radius)
        y += c.radius * 2 + 10
    t.hideturtle(); turtle.done()

if __name__ == "__main__":
    c1, c2, c3 = Circle(radius=30), Circle(diameter=80), Circle(radius=50)
    c4 = c1 + c2
    circles = sorted([c1, c2, c3, c4])

    for c in circles: print(c)

    draw_sorted_circles(circles)

#Longest-world :
def longest_word(sentence):
    words = sentence.split()
    longest = max(words, key=len)
    return longest

user_input = input("Entrez une phrase : ")
result = longest_word(user_input)
print("Le mot le plus long est :", result)

#Sorting

#input
input_str = input("Entrez une liste de mots séparés par des virgules : ")

# Creation de la liste 
words = [word.strip() for word in input_str.split(',')]

#classement par ordre alphabetique 
sorted_words = sorted(words)

# Affichage du resultat
print(','.join(sorted_words))

#Translator
# Dictionnaire de traduction
translations = {
    "Bonjour": "Hello",
    "Au revoir": "Goodbye",
    "Bienvenue": "Welcome",
    "A bientôt": "See you soon"
}

# Entrée utilisateur
phrase = input("Entrez une phrase :\n")

# Traitement des mots 
mots = phrase.split()
translated_dict = {}

for mot in mots:
    mot_nettoye = mot.strip(".,!?")
    if mot_nettoye in translations:
        translated_dict[mot_nettoye] = translations[mot_nettoye]

# Affichage du résultat
print(translated_dict)


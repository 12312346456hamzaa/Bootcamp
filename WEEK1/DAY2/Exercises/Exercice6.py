# Définition de la fonction avec des valeurs par défaut
def make_shirt(size="L", message="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{message}'.")

# Appel 1 : t-shirt large avec message par défaut
make_shirt()

# Appel 2 : t-shirt medium avec message par défaut
make_shirt("M")

# Appel 3 : t-shirt personnalisé avec message différent
make_shirt("S", "Debugging is fun!")

# Appel 4 (Bonus) : utilisation d’arguments nommés
make_shirt(message="Keep calm and code on", size="XL")

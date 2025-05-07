# Demander un mot à l'utilisateur
word = input("Enter a word: ")

# Créer un dictionnaire vide
letter_indices = {}

# Parcourir chaque lettre et son index
for index, letter in enumerate(word):
    # Si la lettre est déjà une clé, ajouter l'index à la liste
    if letter in letter_indices:
        letter_indices[letter].append(index)
    # Sinon, créer une nouvelle entrée avec la lettre comme clé et une liste contenant l'index
    else:
        letter_indices[letter] = [index]

# Afficher le dictionnaire résultant
print(letter_indices)

# Demande à l'utilisateur d'entrer un nombre
number = int(input("Entrez un nombre : "))

# Demande à l'utilisateur d'entrer la longueur de la liste
length = int(input("Entrez la longueur de la liste : "))

# Génère la liste des multiples
multiples = [number * i for i in range(1, length + 1)]

# Affiche le résultat
print("Liste des multiples :", multiples)

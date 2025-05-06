# Créer une liste des nombres de 1 à 20
numbers = list(range(1, 21))

# Afficher tous les nombres
print("Tous les nombres de 1 à 20 :")
for number in numbers:
    print(number)

# Afficher les éléments avec un indice pair
print("\nÉléments avec un indice pair :")
for i in range(0, len(numbers), 2):  # Indices pairs : 0, 2, 4, ...
    print(numbers[i])

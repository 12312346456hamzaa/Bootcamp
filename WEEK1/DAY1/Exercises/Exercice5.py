my_fav_numbers = {3, 7, 21}

# Ajouter deux nouveaux nombres
my_fav_numbers.add(42)
my_fav_numbers.add(99)

# Supprimer un élément (set n’a pas d’ordre, donc on simule un "dernier" en passant par une liste)
my_fav_numbers = set(list(my_fav_numbers)[:-1])

# Créer un ensemble avec les nombres favoris de mon ami
friend_fav_numbers = {8, 15, 42}

# Fusionner les deux ensembles dans une nouvelle variable
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# Afficher les résultats
print("Mes nombres favoris :", my_fav_numbers)
print("Nombres favoris de mon ami :", friend_fav_numbers)
print("Nos nombres favoris :", our_fav_numbers)
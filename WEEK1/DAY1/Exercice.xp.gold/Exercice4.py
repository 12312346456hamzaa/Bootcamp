# Liste de noms
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# Demander à l'utilisateur son nom
user_name = input("Entrez votre nom : ")

# Vérifier si le nom est dans la liste
if user_name in names:
    print(f"Le nom apparaît d'abord à l'index {names.index(user_name)}")
else:
    print("Nom non trouvé dans la liste.")

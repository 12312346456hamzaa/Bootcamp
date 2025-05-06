# Demander à l'utilisateur de saisir un mois (1 à 12)
month = int(input("Entrez un numéro de mois (1 à 12) : "))

# Déterminer la saison
if month in [3, 4, 5]:
    season = "Spring"
elif month in [6, 7, 8]:
    season = "Summer"
elif month in [9, 10, 11]:
    season = "Autumn"
elif month in [12, 1, 2]:
    season = "Winter"
else:
    season = "Mois invalide"

# Afficher la saison
print("La saison est :", season)

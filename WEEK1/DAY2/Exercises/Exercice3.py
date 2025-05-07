# Création du dictionnaire brand
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# Modification : changement du nombre de magasins à 2
brand["number_stores"] = 2

# Affichage d'une phrase expliquant qui sont les clients de Zara
print("Zara's clients are:", ", ".join(brand["type_of_clothes"]))

# Ajout de la clé 'country_creation'
brand["country_creation"] = "Spain"

# Vérification et ajout de 'Desigual' aux concurrents
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")

# Suppression de la date de création
del brand["creation_date"]

# Affichage du dernier concurrent international
print("The last international competitor is:", brand["international_competitors"][-1])

# Affichage des couleurs principales aux États-Unis
print("The major clothes colors in the US are:", ", ".join(brand["major_color"]["US"]))

# Affichage du nombre de paires clé-valeur dans le dictionnaire
print("The brand dictionary contains", len(brand), "key-value pairs.")

# Affichage des clés du dictionnaire
print("The keys in the brand dictionary are:", list(brand.keys()))

# Création d'un nouveau dictionnaire avec plus d'informations sur Zara
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

# Mise à jour du dictionnaire brand avec les données de more_on_zara
brand.update(more_on_zara)

# Affichage de la valeur de la clé 'number_stores'
print("The number of stores is:", brand["number_stores"])

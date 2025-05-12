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

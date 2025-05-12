#input
input_str = input("Entrez une liste de mots séparés par des virgules : ")

# Creation de la liste 
words = [word.strip() for word in input_str.split(',')]

#classement par ordre alphabetique 
sorted_words = sorted(words)

# Affichage du resultat
print(','.join(sorted_words))

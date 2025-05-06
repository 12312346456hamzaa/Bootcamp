import random

# Initialisation des compteurs
wins = 0
losses = 0

while True:
    # Demander un nombre entre 1 et 9
    user_input = input("Devinez un nombre entre 1 et 9 (ou tapez 'q' pour quitter) : ")
    
    if user_input.lower() == 'q':
        break

    if not user_input.isdigit():
        print("Veuillez entrer un nombre valide.")
        continue

    guess = int(user_input)

    if guess < 1 or guess > 9:
        print("Le nombre doit être entre 1 et 9.")
        continue

    # Générer un nombre aléatoire entre 1 et 9
    number = random.randint(1, 9)

    if guess == number:
        print("Winner 🎉")
        wins += 1
    else:
        print(f"Better luck next time. Le bon numéro était {number}.")
        losses += 1

# Afficher les résultats
print("\n--- Résultats ---")
print("Parties gagnées :", wins)
print("Parties perdues :", losses)

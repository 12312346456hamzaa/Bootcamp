import random

# Simule un lancer de dé (valeur entre 1 et 6)
def throw_dice():
    return random.randint(1, 6)

# Lance deux dés jusqu'à obtenir un double. Retourne le nombre de lancers nécessaires.
def throw_until_doubles():
    count = 0
    while True:
        die1 = throw_dice()
        die2 = throw_dice()
        count += 1
        print(f"Throw {count}: ({die1}, {die2})")
        if die1 == die2:
            break
    return count

# Fonction principale : effectue 100 essais et calcule la moyenne
def main():
    results = []
    for i in range(100):
        print(f"\nEssai {i+1}:")
        throws = throw_until_doubles()
        results.append(throws)

    total_throws = sum(results)
    average_throws = round(total_throws / len(results), 2)

    print("\n-----------------------------")
    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average_throws}")
    print("-----------------------------")

# Exécution
main()

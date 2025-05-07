# Dictionnaire initial avec les anniversaires
birthdays = {
    "Alice": "1990/05/17",
    "Bob": "1985/12/23",
    "Charlie": "2000/01/10",
    "Diana": "1993/07/02",
    "Eve": "1998/09/14"
}

# Message de bienvenue
print("🎉 Welcome! Here’s a list of people whose birthdays we know:")
for name in birthdays:
    print(f"- {name}")

# Demander un nom à l'utilisateur
person = input("\nWhose birthday do you want to look up? ")

# Vérifier si le nom est dans le dictionnaire
if person in birthdays:
    print(f"{person}'s birthday is {birthdays[person]}.")
else:
    print(f"Sorry, we don’t have the birthday information for {person}.")

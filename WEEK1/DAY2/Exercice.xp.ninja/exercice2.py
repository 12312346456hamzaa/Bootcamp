def get_full_name(first_name, last_name, middle_name=""):
    if middle_name:
        full_name = f"{first_name} {middle_name} {last_name}"
    else:
        full_name = f"{first_name} {last_name}"
    return full_name.title()

# Entrée utilisateur
first = input("Enter your first name: ")
last = input("Enter your last name: ")
middle = input("Enter your middle name (press Enter if none): ")

# Appel de la fonction avec les entrées
full_name = get_full_name(first_name=first, last_name=last, middle_name=middle)
print("Full name:", full_name)

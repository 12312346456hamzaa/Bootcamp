def compute_pattern_sum(x):
    x_str = str(x)
    total = int(x_str) + int(x_str * 2) + int(x_str * 3) + int(x_str * 4)
    return total

def main():
    print("Ce programme calcule : X + XX + XXX + XXXX")
    user_input = input("Entrez un chiffre entre 0 et 9 : ")

    if user_input.isdigit() and 0 <= int(user_input) <= 9:
        x = int(user_input)
        result = compute_pattern_sum(x)
        print(f"Le résultat de {x} + {x}{x} + {x}{x}{x} + {x}{x}{x}{x} est : {result}")
    else:
        print("Veuillez entrer un chiffre valide entre 0 et 9.")

main()

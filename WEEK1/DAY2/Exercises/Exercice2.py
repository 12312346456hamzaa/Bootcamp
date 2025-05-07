

#Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

# Bonus: Ask the user to input the names and ages
family = {}

while True:
    name = input("Enter family member's name (or type 'done' to finish): ")
    if name.lower() == 'done':
        break

    age_input = input(f"Enter {name}'s age: ")

    # Check if age is a valid number
    if not age_input.isdigit():
        print("❌ Please enter a valid number for the age.")
        continue

    age = int(age_input)
    family[name] = age

# Calculate ticket price per member and total cost
total_cost = 0

print("\n🎟️ Ticket Prices:")
for member, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    print(f"{member.capitalize()} has to pay ${price}")
    total_cost += price

print(f"\n💰 Total cost for the family: ${total_cost}")

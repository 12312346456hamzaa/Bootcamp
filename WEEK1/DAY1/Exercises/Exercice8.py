#1
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

while "Pastrami sandwich" in sandwich_orders:
    sandwich_orders.remove("Pastrami sandwich")

print(sandwich_orders)

 #2
 sandwich_orders = ['Tuna sandwich', 'Avocado sandwich', 'Egg sandwich', 'Chicken sandwich']

for sandwich in sandwich_orders:
    print(f"Preparing {sandwich}")

#3
finished_sandwiches = []

#4
sandwich_orders = ['Tuna sandwich', 'Avocado sandwich', 'Egg sandwich', 'Chicken sandwich']
finished_sandwiches = []

for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)
    print(f"{sandwich} has been prepared.")

# Print the list of finished sandwiches
print("\nAll sandwiches have been prepared:")
print(finished_sandwiches)

#5
sandwich_orders = ['Tuna sandwich', 'Avocado sandwich', 'Egg sandwich', 'Chicken sandwich']
finished_sandwiches = []

# Moving sandwiches to the finished list
for sandwich in sandwich_orders:
    finished_sandwiches.append(sandwich)
    print(f"{sandwich} has been prepared.")

# Printing a message for each finished sandwich
print("\nMessages for finished sandwiches:")
for sandwich in finished_sandwiches:
    print(f"I made your {sandwich.lower()}")

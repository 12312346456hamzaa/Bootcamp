birthdays = {
    "hamza": "1998/04/22",
    "jihane": "1996/12/22",
    "fadwa": "2002/03/17",
    "Diana": "1998/07/04",
    "Edward": "2000/11/29"
}

# Step 2: Print welcome message
print("🎉 Welcome to the Birthday Look-up Program!")
print("You can look up the birthdays of the people in the list!")

# Step 3: Ask user for a name
name = input("Enter a person's name: ")

# Step 4: Get and display the birthday
if name in birthdays:
    print(f"{name}'s birthday is on {birthdays[name]}.")
else:
    print(f"Sorry, we don't have the birthday information for {name}.")
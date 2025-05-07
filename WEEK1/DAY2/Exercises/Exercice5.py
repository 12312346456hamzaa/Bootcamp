import random

def guess_number():
    user_number = int(input("Enter a number between 1 and 100: "))
    random_number = random.randint(1, 100)

    if user_number == random_number:
        print("Success! You guessed the correct number!")
    else:
        print(f"Fail! Your number was {user_number}, but the random number was {random_number}.")

# Call the function
guess_number()

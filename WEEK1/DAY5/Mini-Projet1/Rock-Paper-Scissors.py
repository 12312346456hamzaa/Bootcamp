import random

def get_user_choice():
    while True:
        choice = input("Choose rock, paper, or scissors: ").lower()
        if choice in ['rock', 'paper', 'scissors']:
            return choice
        print("Invalid input.")

def get_computer_choice():
    return random.choice(['rock', 'paper', 'scissors'])

def get_result(user, computer):
    if user == computer:
        return 'draw'
    elif (user == 'rock' and computer == 'scissors') or \
         (user == 'paper' and computer == 'rock') or \
         (user == 'scissors' and computer == 'paper'):
        return 'win'
    return 'loss'

def play_game():
    user = get_user_choice()
    computer = get_computer_choice()
    result = get_result(user, computer)
    print(f"You chose {user}, computer chose {computer}. Result: {result.upper()}")
    return result

def main():
    scores = {'win': 0, 'loss': 0, 'draw': 0}

    while True:
        print("\n(g) Play  |  (x) Exit and Show Scores")
        choice = input("Your choice: ").lower()
        if choice == 'g':
            while True:
                result = play_game()
                scores[result] += 1
                again = input("Play again? (y/n): ").lower()
                if again != 'y':
                    break
        elif choice == 'x':
            print(f"\nFinal Scores: Wins: {scores['win']} | Losses: {scores['loss']} | Draws: {scores['draw']}")
            print("Thanks for playing!")
            break
        else:
            print("Invalid option.")

if __name__ == "__main__":
    main()

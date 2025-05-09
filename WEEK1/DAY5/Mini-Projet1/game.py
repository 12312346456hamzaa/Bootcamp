# game.py

import random

class Game:
    def get_user_item(self):
        valid_choices = ['rock', 'paper', 'scissors']
        choice = ""
        while choice not in valid_choices:
            choice = input("Select (rock, paper, scissors): ").strip().lower()
            if choice not in valid_choices:
                print("Invalid input. Please choose rock, paper, or scissors.")
        return choice

    def get_computer_item(self):
        return random.choice(['rock', 'paper', 'scissors'])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return 'draw'
        elif (
            (user_item == 'rock' and computer_item == 'scissors') or
            (user_item == 'scissors' and computer_item == 'paper') or
            (user_item == 'paper' and computer_item == 'rock')
        ):
            return 'win'
        else:
            return 'loss'

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"You selected {user_item}. The computer selected {computer_item}.", end=' ')
        if result == 'win':
            print("You win!")
        elif result == 'loss':
            print("You lose!")
        else:
            print("It's a draw!")

        return result

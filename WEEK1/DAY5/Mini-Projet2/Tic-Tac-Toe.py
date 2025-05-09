# Creation de terrain vide
board = [" " for _ in range(9)]

# Affichage du terrein du jeux
def display_board(board):
    print()
    print(" " + board[0] + " | " + board[1] + " | " + board[2])
    print("---|---|---")
    print(" " + board[3] + " | " + board[4] + " | " + board[5])
    print("---|---|---")
    print(" " + board[6] + " | " + board[7] + " | " + board[8])
    print()

# le code pour que le joueur choisi uen case
def player_input(board, player):
    while True:
        try:
            pos = int(input(f"Joueur {player}, choisis une case (1 à 9) : ")) - 1
            if pos < 0 or pos > 8:
                print("❌ Choix invalide. Tape un nombre entre 1 et 9.")
            elif board[pos] != " ":
                print("❌ Cette case est déjà prise.")
            else:
                board[pos] = player
                break
        except ValueError:
            print("❌ Entrée invalide. Tu dois taper un nombre.")

# Vérification du joueur si il a gagner
def check_win(board, player):
    win_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # lignes
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # colonnes
        [0, 4, 8], [2, 4, 6]              # diagonales
    ]
    for combo in win_combinations:
        if board[combo[0]] == board[combo[1]] == board[combo[2]] == player:
            return True
    return False

# on verefier si le plateaux est plein
def check_draw(board):
    return " " not in board

# la fonction qui fait tourner le jeux
def play():
    current_player = "X"
    game_over = False

    while not game_over:
        display_board(board)
        player_input(board, current_player)

        if check_win(board, current_player):
            display_board(board)
            print(f"🎉 Le joueur {current_player} a gagné !")
            game_over = True
        elif check_draw(board):
            display_board(board)
            print("🤝 Match nul !")
            game_over = True
        else:
            current_player = "O" if current_player == "X" else "X"  # Change de joueur

# exe game
play()

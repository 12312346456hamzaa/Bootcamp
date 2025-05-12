def create_board():
    return [[" " for _ in range(3)] for _ in range(3)]

def display_board(board):
    print("\nTIC TAC TOE")
    print("***************")
    for row in board:
        print("* " + " | ".join(row) + " *")
        print("*---|---|---*")
    print("***************")

def player_input(board, player):
    while True:
        try:
            row = int(input(f"Player {player}'s turn...\nEnter row (1-3): ")) - 1
            col = int(input("Enter column (1-3): ")) - 1
            if row not in range(3) or col not in range(3):
                print("❌ Invalid row or column. Please choose between 1 and 3.")
            elif board[row][col] != " ":
                print("❌ This cell is already taken.")
            else:
                board[row][col] = player
                break
        except ValueError:
            print("❌ Invalid input. Please enter numbers.")


def check_win(board, player):
    
    for i in range(3):
        if all([cell == player for cell in board[i]]) or \
           all([board[j][i] == player for j in range(3)]):
            return True
    
    if board[0][0] == board[1][1] == board[2][2] == player or \
       board[0][2] == board[1][1] == board[2][0] == player:
        return True
    return False


def check_draw(board):
    return all(cell != " " for row in board for cell in row)


def play():
    print("Welcome to TIC TAC TOE!")
    board = create_board()
    current_player = "X"
    game_over = False

    while not game_over:
        display_board(board)
        player_input(board, current_player)

        if check_win(board, current_player):
            display_board(board)
            print(f"🎉 Player {current_player} wins!")
            game_over = True
        elif check_draw(board):
            display_board(board)
            print("🤝 It's a draw!")
            game_over = True
        else:
            current_player = "O" if current_player == "X" else "X"


play()

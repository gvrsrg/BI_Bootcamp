def show_game(board):
    border = "*"*17
    h_separator = "*  ---|---|---  *"
    print(border)
    size = len(board)
    for index, line in enumerate(board):
        print('*   '+' | '.join(line)+'   *')
        if(index < size-1): 
           print(h_separator)
    print(border)


def next_move(board, sign):
    valid_turn = False
    valid_positions = [0, 1, 2]
    while not valid_turn:
        print(f"{sign} turn:")
        x_pos = int(input("enter column ([0,1,2]):"))
        y_pos = int(input("enter row ([0,1,2]):"))
        if (x_pos in valid_positions) & (y_pos in valid_positions):
            if board[y_pos][x_pos] == " ":
                board[y_pos][x_pos] = sign
                valid_turn = True
            else:
                print("This cell is taken!")

def check_lines(board):
    for sym in ['X', 'O']:
        for line in board:
            if line[0] == line[1] == line[2] == sym:
                show_game(board)
                print(f"{sym} win!")
                return True
    return False


def check_columns(board):
    for sym in ['X', 'O']:
        for column in range(0,3):
            if board[0][column] == board[1][column] == board[2][column] == sym:
                show_game(board)
                print(f"{sym} win!")
                return True
    return False


def check_diagonals(board):
    for sym in ['X', 'O']:
        if (board[0][0] == board[1][1] == board[2][2] == sym) | (board[0][2] == board[1][1] == board[2][0] == sym):
            show_game(board)
            print(f"{sym} win!")
            return True
    return False

def check_is_full(board):
    for line in board:
        for cell in line:
            if cell == ' ':
                return False

    print("It's a TIE!")
    return True


def check_win(board):
    return check_lines(board) | check_columns(board) | check_diagonals(board) | check_is_full(board)

def play():

    game_board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]
    show_game(game_board)
    is_tic = True
    while not check_win(game_board):
        next_move(game_board, 'X' if is_tic else 'O')
        is_tic = not is_tic
        show_game(game_board)


if __name__ == "__main__":
    play()

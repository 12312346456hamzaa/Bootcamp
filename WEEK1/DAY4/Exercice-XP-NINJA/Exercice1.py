import time
import os
import copy
import random


LIVE_CELL = "\033[92m⬛\033[0m"  # Vert
DEAD_CELL = "  "  # Cellule morte (vide)

class GameOfLife:
    def __init__(self, rows, cols, initial_state=None):
        self.rows = rows
        self.cols = cols
        self.grid = self.create_grid(initial_state)

    def create_grid(self, initial_state):
        grid = [[0 for _ in range(self.cols)] for _ in range(self.rows)]
        if initial_state:
            for i, j in initial_state:
                grid[i][j] = 1
        return grid

    def display(self):
        os.system('cls' if os.name == 'nt' else 'clear')
        for row in self.grid:
            line = ""
            for cell in row:
                line += LIVE_CELL if cell else DEAD_CELL
            print(line)
        print()

    def count_live_neighbors(self, row, col):
        directions = [(-1, -1), (-1, 0), (-1, 1),
                      (0, -1),         (0, 1),
                      (1, -1), (1, 0), (1, 1)]
        count = 0
        for dr, dc in directions:
            r, c = row + dr, col + dc
            if 0 <= r < self.rows and 0 <= c < self.cols:
                count += self.grid[r][c]
        return count

    def update(self):
        new_grid = copy.deepcopy(self.grid)
        for i in range(self.rows):
            for j in range(self.cols):
                live_neighbors = self.count_live_neighbors(i, j)
                if self.grid[i][j] == 1:
                    if live_neighbors < 2 or live_neighbors > 3:
                        new_grid[i][j] = 0
                else:
                    if live_neighbors == 3:
                        new_grid[i][j] = 1
        self.grid = new_grid

    def run(self, generations=30, delay=0.2):  
        for gen in range(generations):
            print(f"Generation {gen + 1}")
            self.display()
            self.update()
            time.sleep(delay)

def random_initial_state(rows, cols, density=0.25):
    return [(i, j) for i in range(rows) for j in range(cols) if random.random() < density]

# Lancement du jeyx carreaux
rows, cols = 20, 40
initial_state = random_initial_state(rows, cols, density=0.25)
game = GameOfLife(rows, cols, initial_state)
game.run()  

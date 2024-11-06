# tic-tac-toe

Tic Tac Toe game made with HTML, CSS, and JavaScript (project idea courtesy of The Odin Project)

Player starts the game by clicking a tile, marking 'X' on the board. Each player input is followed by a computer input, marked by an 'O' somewhere else on the board. Game continues until 1 condtion is met:
- player gets 3 in a row and wins
- computer gets 3 in a row and wins
- all spaces are occupied
Upon the game ending, a popup will allow players to play again, resetting the state of the game

While the creation of the game and the logic were not to difficult to create, there were some quirks that got in the way. The code base primarily revolves around 2 main functions, one for the game logic and one to play/display the game. Figuring out how to get certain variables from one function to another without relying on global variables was an obstacle while creating the game. Additionally, the game logic is not entirely optimized and there are flaws in the computer input.

Possible improvements that could be made:
- refactor the code for win condition (currently brute forcing possible win conditions for both player and opponent)
- allow players to input their name and keep score (a function for this is currently made but not implemented yet)
- add animation or some effect when a game is won rather than a bland pop up
- improve the computer input to try to win the game
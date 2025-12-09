# Stratego Game
A command-line implementation of the classic board game Stratego, designed for players who enjoy strategic thinking and tactical gameplay.  


## Installation and Running
1. Clone the repository:
   git clone

2. Navigate to the project directory:
    cd StrategoGame

3. Install dependencies:
    npm install

4. Run the game:
    node main.js  


## Usage Example
- Start the game and follow the prompts to move your soldiers on the board.
- Input format for moving a soldier: `x/y` (e.g., `2/3`).
- Example output after capturing the flag:
```YOU CAPTURED THE FLAG!```  


## Folder Structure 
- `gameLogic`: Contains the core game logic, including movement and combat mechanics.
- `board`: initializes and manages the game board setup. 
- `main.js`: The main entry point for the game.  


## Troubleshooting
1. **Issue**: Game does not start.
   **Solution**: Ensure Node.js is installed and you are in the correct directory.
2. **Issue**: Invalid input format.
   **Solution**: Follow the input format `x/y` when prompted to move a soldier.
3. **Issue**: Soldiers not moving as expected.
   **Solution**: Check the console for error messages and ensure valid moves are made according to game rules.  


## Roadmap
1. Implement two player functionality.
2. Add a graphical user interface (GUI).
3. Introduce advanced AI for computer opponents.  


## Branch Names and Commit Style
- Branch names:  use development, feature/feature-name, bugfix/bug-description
- Commit style: explicit and descriptive messages, e.g., "Add soldier movement logic" or "Fix flag capture bug".

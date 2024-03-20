# Word-Cloud-and-Tic-Tac-Toe

# Word Cloud Generator using D3.js

This application generates a word cloud based on the synonyms of a word provided by the user. It utilizes D3.js to visualize the word cloud.

## How it works

1. **Input Word:** The user is prompted to enter a word.
2. **API Query:** The application queries the [Thesaurus API](https://api.api-ninjas.com/v1/thesaurus) to fetch all the synonyms of the provided word.
3. **Word Cloud Generation:** Using D3.js, the application generates a word cloud where the size of each word corresponds to its frequency of occurrence in the retrieved synonyms.

## API Endpoint
- **Thesaurus API:** [https://api.api-ninjas.com/v1/thesaurus](https://api.api-ninjas.com/v1/thesaurus)
- 
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Tic-Tac-Toe Game

This is a simple Tic-Tac-Toe game implemented in JavaScript, HTML, and CSS. The game allows you to play against an AI opponent, making moves based on recommendations from a backend API.

## Gameplay

- The game board consists of a 3x3 grid.
- Players take turns to place their marks ('X' or 'O') on empty cells of the grid.
- The game ends when either a player wins by having three marks in a row, column, or diagonal, or when the game board is full and there is no winner (draw).

## Features

- Single-player mode: Play against an AI opponent that makes moves based on recommendations from an API.
- Responsive design: The game interface adapts to different screen sizes for a better user experience.
- Reset button: Start a new game at any time by clicking the "Reset" button.

## API Endpoint

The game utilizes a backend API to generate recommendations for the AI opponent's moves. 
The endpoint used is: https://tic-tac-toe-api-psu.onrender.com/api/v1/---O---X-/O




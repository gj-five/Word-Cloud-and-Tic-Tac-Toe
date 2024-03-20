# Word-Cloud-and-Tic-Tac-Toe

# Word Cloud Generator

This project generates word clouds based on synonyms of the entered word using the API-Ninjas Thesaurus API and visualizes them using D3.js.

## Overview

Word clouds are a popular visualization technique for representing the frequency of words in a given text. This project allows users to enter a word, fetch its synonyms using the API-Ninjas Thesaurus API, filter out inappropriate words, and display the remaining synonyms as a word cloud.

## Features

- **API Used:** [API-Ninjas Thesaurus API](https://api.api-ninjas.com/v1/thesaurus): This API is used to fetch synonyms for the entered word.
- **Handling Inappropriate Words:** Inappropriate words are filtered out from the synonyms list before displaying the word cloud. The list of inappropriate words can be easily customized by adding more words to the `blocklist` array in the JavaScript code.

## Usage

1. Enter a word in the input field.
2. Click on the "Generate Word Cloud" button to fetch synonyms and display the word cloud.
3. The word cloud will be displayed in the designated container.

## Technologies Used

- **D3.js:** A JavaScript library for producing dynamic, interactive data visualizations in web browsers.
- **jQuery:** A fast, small, and feature-rich JavaScript library.
- **API-Ninjas Thesaurus API:** An API used to fetch synonyms for words.
- **HTML/CSS:** Used for the structure and styling of the web page.

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




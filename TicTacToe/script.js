// Initialize the game board
const board = Array(9).fill('');
let currentPlayer = 'X';
let gameOver = false;
let waitingForComputer = false; // Flag to track if waiting for the computer's move

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
const outcomeMessage = document.getElementById('outcome');

// Function to make a move on the board
async function makeMove(cellIndex) {
  if (!gameOver && !waitingForComputer && board[cellIndex] === '') {
    board[cellIndex] = currentPlayer;
    renderMove(cellIndex);
    checkGameOver();
    if (!gameOver && currentPlayer === 'O') {
      await makeComputerMove();
    }
  }
}

// Function to render a move on the board
function renderMove(cellIndex) {
  cells[cellIndex].textContent = currentPlayer;
  cells[cellIndex].setAttribute('data-value', currentPlayer);
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to make a computer move
async function makeComputerMove() {
  waitingForComputer = true;
  const currentBoardState = board.map(cell => cell === '' ? '-' : cell).join(''); // Convert empty strings to '-'
  const currentPlayer = 'O'; // Assuming it's the computer's turn

  try {
    const response = await fetch(`https://tic-tac-toe-api-psu.onrender.com/api/v1/${currentBoardState}/${currentPlayer}`);

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    const apiResponse = await response.json();

    // Log the recommendation and other details to the console
    console.log('API Response:', apiResponse);
    const recommendation = apiResponse.recommendation;
    console.log('Recommendation:', recommendation);

    // Use the recommendation from the API to make a move
    makeMove(recommendation); // Make sure to handle this correctly if it needs to wait

  } catch (error) {
    console.error('Error making computer move:', error);
  } finally {
    waitingForComputer = false;
  }
}

// Function to check for a winner or draw
function checkGameOver() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      gameOver = true;
      outcomeMessage.textContent = `${board[a]} wins!`;
      return;
    }
  }

  if (board.every(cell => cell !== '')) {
    gameOver = true;
    outcomeMessage.textContent = 'Draw!';
    console.log('Draw!');
  }
}

// Function to reset the game
function resetGame() {
  board.fill('');
  cells.forEach(cell => {
    cell.textContent = '';
    cell.removeAttribute('data-value');
  });
  currentPlayer = 'X';
  gameOver = false;
  outcomeMessage.textContent = '';
  waitingForComputer = false;
}

// Event listener for reset button
resetButton.addEventListener('click', resetGame);

// Event listener for cell clicks
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    makeMove(index);
  });
});

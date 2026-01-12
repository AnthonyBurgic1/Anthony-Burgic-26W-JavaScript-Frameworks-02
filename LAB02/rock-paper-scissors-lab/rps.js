// Rock, Paper, Scissors - Terminal Game \\ 

const readline = require("readline");

// Create input/output interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Possible choices \\ 
const choices = ["rock", "paper", "scissors"];

// Ask the player for input \\ 
rl.question("Choose rock, paper, or scissors: ", function (playerChoice) {
  playerChoice = playerChoice.toLowerCase();

  // Validate input \\ 
  if (!choices.includes(playerChoice)) {
    console.log("Invalid choice. Please choose rock, paper, or scissors.");
    rl.close();
    return;
  }

  // Computer choice \\ 
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  console.log(`You chose: ${playerChoice}`);
  console.log(`Computer chose: ${computerChoice}`);

  // Determine winner \\ 
  if (playerChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
  } else {
    console.log("Computer wins!");
  }

  rl.close();
});

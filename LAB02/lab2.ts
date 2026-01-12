// My Rock Paper Scissors Game \\

import prompt from "prompt";

// The prompt system \\ 
prompt.start();

// Ask the user for input \\ 
prompt.get(["userSelection"], (err, result) => {
  if (err) {
    console.log("An error occurred.");
    return;
  }

  // Normalize user input \\ 
  const userSelection: string = String(result.userSelection).toUpperCase();

  // Generate computer selection \\ 
  const randomNum: number = Math.random();
  let computerSelection: string;

  if (randomNum <= 0.34) {
    computerSelection = "PAPER";
  } else if (randomNum <= 0.67) {
    computerSelection = "SCISSORS";
  } else {
    computerSelection = "ROCK";
  }

  // Display selections \\ 
  console.log("User Selection:", userSelection);
  console.log("Computer Selection:", computerSelection);

  // Determine the winner \\ 
  if (userSelection === computerSelection) {
    console.log("It's a tie");
  } else if (
    (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (userSelection === "PAPER" && computerSelection === "ROCK") ||
    (userSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    console.log("User Wins");
  } else {
    console.log("Computer Wins");
  }
});

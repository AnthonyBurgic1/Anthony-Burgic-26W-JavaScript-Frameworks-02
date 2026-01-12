const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const choices = ["rock", "paper", "scissors"];

rl.question("Choose rock, paper, or scissors: ", (userChoice) => {
  userChoice = userChoice.toLowerCase();

  if (!choices.includes(userChoice)) {
    console.log("Invalid choice!");
    rl.close();
    return;
  }

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`Computer chose: ${computerChoice}`);

  if (userChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win! 🎉");
  } else {
    console.log("You lose 😢");
  }

  rl.close();
});

#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;

let pinCode = 2533;

let pinAns = await inquirer.prompt({
  name: "pin",
  type: "number",
  message: "Enter your pin",
});

if (pinAns.pin === pinCode) {
  console.log("your pin is correct");

  let operationAnswer = await inquirer.prompt([
    {
      name: "operations",
      message: "choose from the given options",
      type: "list",
      choices: ["Withdraw", "Fast cash", "Check balance"],
    },
  ]);
  // if user select withdraw
  if (operationAnswer.operations === "Withdraw") {
    let amountWithdrawl = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    if (amountWithdrawl.amount <= myBalance) {
      let balance = myBalance - amountWithdrawl.amount;
      console.log(`your remaining amount is ${balance}`);
    } else {
      console.log(`you have insufficient balance`);
    }
  }
  // if user select fast cash
  else if (operationAnswer.operations === "Fast cash") {
    let fastCashAns = await inquirer.prompt([
      {
        name: "cash",
        type: "list",
        choices: ["1000", "3000", "10000", "12000"],
      },
    ]);
    if (fastCashAns.cash <= myBalance) {
      let balance2 = myBalance - fastCashAns.cash;
      console.log(`The remaining balance is ${balance2}`);
    } else {
      console.log(`you have insufficient balance`);
    }

  } 
  // if user select check balance
  else if (operationAnswer.operations === "Check balance") {
    console.log(`your current amount is ${myBalance}`);
  }
} 

else {
  console.log("Incorrect Pin");
}

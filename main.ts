#! /usr/bin/env node

import inquirer from "inquirer"

const calculator = await inquirer.prompt([
    {
        type: "number",
        name: "firstNumber",
        message: "Enter First Number",
    },
    {
        type: "number",
        name: "secondNumber",
        message: "Enter Second Number",
    },
    {
        type: "list",
        name: "Operator",
        message: "Select operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
])

if (calculator.Operator === "Addition"){
    console.log(calculator.firstNumber + calculator.secondNumber)
}
else if (calculator.Operator === "Subtraction"){
    console.log(calculator.firstNumber - calculator.secondNumber)
}
else if (calculator.Operator === "Multiplication"){
    console.log(calculator.firstNumber * calculator.secondNumber)
}
else if(calculator.Operator === "Division"){
    console.log(calculator.firstNumber / calculator.secondNumber)
}
else {
    console.log("Your operation is not valid")
}


import inquirer from "inquirer";
let { Num1, Num2, operation } = await inquirer.prompt([
    {
        name: "Num1",
        type: "number",
        message: "Please Enter your first number:"
    },
    {
        name: "operation",
        type: "list",
        choices: ["+", "-", "*", "/"],
        message: "Please select operator"
    },
    {
        name: "Num2",
        type: "number",
        message: "Please Enter your second number"
    }
]);
if (operation === "+") {
    console.log(`Your answer is ${Num1 + Num2}`);
}
else if (operation === "-") {
    console.log(`Your answer is ${Num1 - Num2}`);
}
else if (operation === "*") {
    console.log(`Your answer is ${Num1 * Num2}`);
}
else if (operation === "/") {
    console.log(`Your answer is ${Num1 / Num2}`);
}
else {
    console.log(`invalid input`);
}

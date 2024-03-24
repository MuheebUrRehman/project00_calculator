#! /usr/bin/env node
import inquirer from "inquirer";
const anwser = await inquirer.prompt([
    {
        message: "welcome to Simple Command Line Calculator(press ENTER KEY to continue)",
        type: "text",
        name: "msg",
    },
    { message: "enter first number", type: "number", name: "firstnumber" },
    { message: "enter second number", type: "number", name: "secondnumber" },
    {
        message: "select any one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division", "power"],
    },
]);
if (anwser.operator === "addition") {
    console.log(`your anwser is = ${anwser.firstnumber + anwser.secondnumber}`);
}
else if (anwser.operator === "subtraction") {
    console.log(`your anwser is = ${anwser.firstnumber - anwser.secondnumber}`);
}
else if (anwser.operator === "multiplication") {
    console.log(`your anwser is = ${anwser.firstnumber * anwser.secondnumber}`);
}
else if (anwser.operator === "division") {
    console.log(`your anwser is = ${anwser.firstnumber / anwser.secondnumber}`);
}
else if (anwser.operator === "power") {
    console.log(`your anwser is = ${anwser.firstnumber ** anwser.secondnumber}`);
}
else {
    console.log("please enter valid operator");
}
console.log("THE END");

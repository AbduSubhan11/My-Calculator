#! /usr/bin/env node

import inquirer from "inquirer";  

const answer= await inquirer.prompt([
    {
        name:"firstNumber",
        type:"number",
        message:"Enter the 1st number",
    },
    {
        name:"operator",
        message:"select the operator to perform operation",
        type:"list",
        choices:["Addition","Subtraction","Multiplication","Division"]
    },
    {
        name:"secondNumber",
        type:"number",
        message:"Enter the 2nd number",
    }
]);

if(answer.operator==="Addition"){
    console.log((answer.firstNumber + answer.secondNumber));
}else if(answer.operator==="Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if(answer.operator==="Multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
}else if(answer.operator==="Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}else {
    console.log("select the valid operator");
}
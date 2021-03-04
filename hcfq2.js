//Write a function to find LCM of any two numbers using the HCF function from previous
//question. Write it as a function expression.
//a. Now write a program that asks two numbers from the user and displays HCF and LCM of
//the two numbers.
//Hint: search for relation between HCF and LCM. */
"use strict";
// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @param {*Number} num1 
 * @param {*Number} num2 
 */
let hcf = function (num1,num2){
    let hFactor =1;
    for(let i =1; i<=num1 && i<=num2; i++){
        if(num1%i === 0 && num2%i === 0){
            hFactor = i;
            
        }
    }
    console.log(hFactor);
    return hFactor;
}

let lcm = function(num1,num2){
    let lFactor = (num1 * num2)/hcf(num1,num2);
    return lFactor;
}


let prompt = require("prompt-sync")();
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");

console.log(lcm(num1,num2));

/* eslint-disable valid-jsdoc */
//Write a function to compute HCF of two numbers. Write it as a function expression.

"use strict";
/**
 * 
 * @param {*Number} num1 
 * @param {*Number} num2 
 */
let hcf = function (num1,num2){
    let hFactor=1;
    for(let i =1; i<=num1 && i<=num2; i++){
        if(num1%i === 0 && num2%i === 0){
            hFactor = i;
            
        }
    }
    return hFactor;

}
console.log(hcf(9,12));
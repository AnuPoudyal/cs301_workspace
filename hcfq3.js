
/**7. Write a function compute, that takes three parameters. First parameter is a call back function that does the actual operation, 
 * second and third are the operands. For e.g., compute (add, 2,3) should return 5 */

//   function  add(num1, num2){
//       return num1+num2;
//   }
//  function compute(sum, n1, n2){
//     return sum(n1,n2)

//  }

 
 //Write compute function as a function expression.
//   let compute = function(sum, n1,n2){
//       return sum(n1,n2);
//   }

//   /*Write add function as a function expression and call compute passing add as a callback.


//  let add = function(num1,num2){
//     return num1 +num2;
// }
// let x = compute(add, 12,12);
// console.log(x);

//o Refactor to pass add logic as an anonymous function. (Make a copy first)

// let compute = function(sum, n1,n2){
//     return  sum(n1,n2);
// };
// let add = function(n1,n2){
//     return n1+n2;
// };
// let func = add;
// let x = compute(func, 11,12);
// console.log(x);
   
// o Refactor to pass add logic as an arrow function. (Make a copy first) */
// eslint-disable-next-line semi
"use strict"
// eslint-disable-next-line valid-jsdoc
/**
 * 
 * @param {Number} sum 
 * @param {*Number} num1 
 * @param {*Number} num2 
 */
let compute = function (sum, num1,num2){
    return sum(num1,num2);
    }
     let add = (num1,num2)=>num1+num2;
     let func = add;
     console.log(compute(func,23,24));
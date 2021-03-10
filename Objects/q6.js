/**
 * Write a swap function that takes two parameters of number type and swap the values of the passed parameters.
a. Once your function is ready run following code and see if your swap function works?
 */
"use strict";
let x = 10; 
let y = 20;
console.log(x,y);
function swap (a , b){
    let temp = a;
        x = b;
        y = temp;
}
swap(x,y);
console.log(x,y);
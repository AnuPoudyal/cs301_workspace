// Given an expression array exp, write a program to examine whether the pairs and the orders of
//“{“, “}”, “(“, “)”, “[“, “]” are correct in exp. 
//Example:
//Input: exp = ["(", ")", "[", "{", "}", "]"]
 //Output: Balanced
//Input: exp = ["[", "(", "]", ")"] 
//Output: Not Balanced
 //

"use strict";

const arr = ["(", ")", "[", "{", "}", "]"];
let copy = [];


for(let i = 0; i < arr.length; i++){
 copy[i] = arr.pop();
 
}
console.log(copy);

for ( let j =0; j < arr.length; j++){
    if(arr[j] !== copy[j]){
        return(console.log("Not Balanced"));
    }
    return (console.log("Balanced"));
}
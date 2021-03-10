//Write a function sumOddIndicesValues that takes an array as a parameter and returns the sum
//of values on the odd indices.
"use strict";
/**
 * 
 * @param {array} arr is an array
 * @returns {array} is an array
 */ 
function sumOddIndices(arr){
let sumodd=0;
for(let i=0;i<arr.length;i++){
if(i%2!==0){
    sumodd=sumodd+arr[i];
}
return sumodd;
}
}
console.log(sumoddIndices[1,2,3,4,5,6]);
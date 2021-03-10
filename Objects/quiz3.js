"use strict";
let a = 5;
let b = 7;
console.log(a,b);
swap1(a,b);
console.log(a,b);
let arr = [1,2,3];
console.log(arr);
swap2(arr, 0, 2);
console.log(arr);
function swap1(a,b){
let temp = a;
a=b;
b=a;
}
function swap2(arr, i, j){
let temp = arr[i];
arr[i]= arr[j];
arr[j]= temp;
}
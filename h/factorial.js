/*const prompt=require('prompt-sync')();
let num=+prompt("enter the number");
let fact=1;
for(let i=1;i<num;i++){
    fact=fact*i;
    console.log(fact);
} */
"use strict";
let matrix=[[1,2,3],[3,4,5],[4,3,2]];
let sum=0;
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        console.log(matrix[i][j]+ "\t");
    }

}
console.log(sum);
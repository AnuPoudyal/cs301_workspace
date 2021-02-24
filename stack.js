const prompt=require('prompt-sync')();
let numberOfBox=+prompt("enter the number of boxes");
let boxPerStack=+prompt("enter boxes per stack");
let numberOfStack=Math.ceil(numberOfBox/boxPerStack);
console.log(numberOfStack);
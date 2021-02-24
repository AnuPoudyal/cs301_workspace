//Write a JavaScript program that ask a user for a volume in quarts then converts that value in
//liters.

const prompt=require('prompt-sync')();
let volumeInQuarts=prompt("enter volume in quarts");
let volumeInLiters=parseFloat(volumeInQuarts)*0.94635;
console.log(volumeInLiters);
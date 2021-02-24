const prompt=require('prompt-sync')();
let radius=prompt("enter the value of radius");
let height=prompt("enter the value of height");
let volume=Math.PI*Math.pow(radius,2)*height;
console.log(volume);
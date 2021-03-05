"use strict"
const prompt= require('prompt-sync')();
let x1=prompt("enter the value of x1");
let y1=prompt("enter the value of y1");
let x2=prompt("enter the value of x2");
let y2=prompt("enter the value of y2");
let distance=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
console.log(distance);
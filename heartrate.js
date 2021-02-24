const prompt=require('prompt-sync')();
let age=parseFloat(prompt("Enter your age : "));
let max_heartbeat=220-age;

let fastrate=0.85*max_heartbeat;
let slowrate=0.65*max_heartbeat;
console.log(fastrate)
console.log(slowrate)
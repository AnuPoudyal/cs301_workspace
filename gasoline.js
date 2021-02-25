//Write JavaScript program to compute the mileage of a vehicle. Your program should allow the
//user to enter the beginning and ending odometer readings and the number of gallons of gas
//used and should output the mileage in miles per gallon. 

const prompt=require('prompt-sync')();
let beging_odometer=+prompt("Enter intitail value=")
let ending_odometer=+prompt("enter final value=")
let numberOfGas=+prompt("enter the number of gas")
let totalDistance=ending_odometer-beging_odometer;
let mileage=totalDistance/numberOfGas;






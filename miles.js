//Write a JavaScript program that asks a user for a distance in kilometers and then convert that
//value in miles

const prompt=require('prompt-sync')();
let distanceInKm=+prompt("enter distance in kilometer");
let distanceInMiles=distanceInKm*0.621371;
console.log(`distace in miles is : ${distanceInMiles}`);
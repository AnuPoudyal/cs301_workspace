//Write JavaScript program to compute the mileage of a vehicle. Your program should allow the
//user to enter the beginning and ending odometer readings and the number of gallons of gas
//used and should output the mileage in miles per gallon. 

const prompt=require('prompt-sync')();
let beging_of_odo_meter=prompt("Enter intitail value=")
let ending_odometer=prompt("enter final value=")
let gasoline=prompt("enter the gas usage=");

beging_of_odo_meter=parseFloat(beging_of_odo_meter);
ending_odometer=parseFloat(ending_odometer);

if (beging_of_odo_meter>=ending_odometer || beging_of_odo_meter<0) 
{
    console.log("this is in apropriate value check your intila input");
}
else 
{
gasoline=parseFloat(gasoline);

let total_distance= ending_odometer-beging_of_odo_meter;

let oilcumsption= total_distance/gasoline;

console.log("your car oil cumsumption is "+ oilcumsption +" mile per galone" );
}
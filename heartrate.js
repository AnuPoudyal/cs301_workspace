const prompt=require('prompt-sync')();
let age=parseFloat(prompt("Enter your age : "));
let max_heartbeat=220-age;

if(age<0 &&  age>150)
{
    console.log("this is not the right input for age ")

}
else if( (age*65)/100>=65 || (age*85)/100<=85){

    console.log("your heart beat is okay")
}
else
{
    console.log("your heart is not okay please see your doctor")

}
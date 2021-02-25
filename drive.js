const prompt=require('prompt-sync')();
let age=+prompt("enter  the age")
if(age<=0){
    console.log("please enter valid age")
}
else if(age<=14){
    console.log("you cannot drive yet")
}
else if(age<=18){
console.log("you can drive undervision")
}
else{
console.log("you can drive")
}
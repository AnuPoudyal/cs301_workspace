const prompt=require("prompt-sync")();
let number=+prompt("enter the number between 1 and 5");
if(number===1){
    console.log("one");
}
else if(number===2){
    console.log("two");
}
else if(number===3){
    console.log("three")
    
}
else if(number===4){
    console.log("four")
}else if(number===5){
    console.log("five");
}

switch(number){
case 1 : 
console.log("one");
break;
case 2 :
    console.log("two")
    break;
case 3:
    console.log("three")
    break;
    case 4:
        console.log("four")
   break;
   case 5:
       console.log("five")
       break;
       default:
           console.log("invalid number")




}

let weather=prompt("enter weather");
let temp=prompt("enter temperature");
if(weather=='sunny' && temp<80){
    console.log("good day for walking");
}else{
    console.log("good day for swimming")
}
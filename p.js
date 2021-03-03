let x ="";
for(let i = 1; i<=5; i++){
    for (let j = 1; j<=5; j++){
        x = x+i;      
    }
    x+="\n";
}
console.log(x);

let y ="";
for(let i = 1; i<=5; i++){
    for (let j = 1; j<=5; j++){
        x = x+j;      
    }
    x+="\n";
}
console.log(x);
let a = "1";
let b = 1;
switch (++a){
    case b :
        console.log("Yes")
        break;

     default: 
     console.log ("No")   
     
}
 
let n=+prompt("enter digit");
function reverse(n){
let reversenum="";
while(n!=0){
    reversenum+=n%10;
    n=Math.floor(n/10);
}
console.log(reversenum)
}






const prompt = require("prompt-sync")();
let age = prompt("Enter age: ");
console.log(age);
let message = (age < 5)? "baby": 
(age < 13) ? "child" :
(age < 20) ? "teen" :
(age < 40) ? " adult" : "old";

console.log(message);

for(let i=1; i<10; i++){
    if(i%3===0) continue;
    console.log(i);
   }


   for(let i=0;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log(i);
    }
  }

  //Write a JavaScript program that asks radius of a circle as input form the user and prints the area of the circle using
   //formula (πr2). Program should keep on prompting user to enter correct value, until the value enter is a positive number. 
   //Use Math object for getting the value of π and getting the square of the radius.

   const prompt=require('prompt-sync')();
   let r=+prompt("enter radius");

   let area=Math.PI*Math.pow(r,2);
   console.log("area");
   let input=prompt("enter correct value");
   while(input<=0){
  console.log("your inpur is input"+input);
  input=prompt("enter positive integer");
}


function reversedigit(n){
let reversedigit='';
while(n!=0){
    reversedigit+=n%10;
    n=Math.floor(n/10);
}
console.log(n)
}


const correct_pin=123;
let i=1;
let enter_pin=+prompt("enter pin")
for(let i=0;i<3;i++){
if(enter_pin==correct_pin){
    console.log("correct");
    break;
}
if(enter_pin!=correct_pin){
console.log("incorrect")
enter_pin=+prompt("enter again");

}
if(i==2){
    console.log("your are locked out")
}

}










let sales=prompt("enter sales");
let commission;
if(sales<300){
    commission=0;
}
elseif(sales>=300&&sales<500){
    commission=0.1*(sales-20k);
}
elseif(sales>=500&&sales<1000) {
    commission=0.2*sales;
}
else{
    commission=0.03*sales;
}
}
console.log("commission"+commission);

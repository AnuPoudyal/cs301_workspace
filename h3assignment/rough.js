"use strict";
function issumlastfirst(num){
let firstDigit=0;
let lastDigit=num%10;
while(num>0){
num=num/10;
firstdigit=num;
let sum=firstDigit+lastDigit;
return sum%2!==0;
}
}

function isStacked(num){
    let sum=0;
for(let i=0;i<num;i++){
sum=sum+i;
if(sum==num){
    return true;
}
if(sum>num){
return false;
}
isStacked(10);

let noofitems=prompt("enter noof items");
let total=0;
for(let i=0;i<noofitems;i++){
let price=+prompt("enter price of item");
total+=price;
}
if(total>99){
    total=total-0.10*total;
}
console.log(total);
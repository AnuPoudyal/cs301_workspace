/*1. checkPrime
a. Write a function named checkPrime that accepts a parameter and returns true if the
argument is a prime number otherwise returns false.
b. Now write a program that prompts user to input a number and calls the function
checkPrime to see if the entered number is a prime number or not. */

function checkPrime(num){
    if(num === 2){
        console.log("Prime");
        return;
    } else if (num>2){
        for(let i =2; i<num; i++){
            if(num % i === 0){
                console.log("Not Prime");
                return ;
            }

        }
    }
    console.log("Prime");
    return;
}
const prompt = require("prompt-sync")();
let number = parseInt(prompt("Please enter a positive number: "));
checkPrime(number);



let a = "1";
let b = 1;
switch (++a){
    case b :
        console.log("Yes")
        break;

     default: 
     console.log ("No")   
     
}

let x = 5;
function display() {
 let x = 3;
 let y = 7;
 console.log(x, y);
}
display();
console.log(x);
console.log(y);


const prompt=require('prompt-sync')();
let n=+prompt("enter num")

function prime(n){

    for(let i=2;i<n;i++){
        if(n%i==0)
        console.log("prime")
        return;
    }

function isreversed(n){
    let rev_num=reverse(n);
    return isreversedprime(reversedNum);
    

}


}
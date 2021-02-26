const prompt=require('prompt-sync')();
let number=+prompt("enter the evennumber between 1 and 10");

for(let i=1;i<=20;i++){
    if(number%2==0){
        console.log("even numbers");
    }

}

let number=0;

while(i<=20){
if(number%2==0){
    console.log("even number")
    i++;
}

}

2) const prompt=require('prompt-sync')();
let age=+prompt("enter the age");

while(age<=18){
    prompt("enter the age again");
}
console.log("age is" +age);

// do{
    const prompt=require('prompt-sync')();
    let age=prompt("enter the age")
    }while(age<=18)
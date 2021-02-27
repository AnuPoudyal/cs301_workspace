const prompt=require('prompt-sync')();
/*let age=+prompt("enter age");
let i;
for(i=1;i<=5;i++){

    if(age==5){
        console.log("hbd")
    }
}
*/

let number=+prompt("enter number");
let sum=0;
for(let i=10;i<=100;i++){
if(number%3==0 && number%5==0){
    sum=sum+i;
    }

console.log(sum);
}
//const prompt=require('prompt-sync')();
//let weather=prompt('enter the weather for today');
//if(weather==='rainy'){
 //   console.log("get an umbrella")
//}


const prompt=require('prompt-sync')();
let number=+prompt("enter the number between 1 and 10");
if(number>=1 && number<=10){
    console.log("bingo");
}
else{
    
    console.log("try again")


}
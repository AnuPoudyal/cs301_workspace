/* const prompt=require("prompt-sync")();
let age=prompt("enter your age");
if(age<=0){
    console.log("enter valid age")
}
if(age>0 && age<=14){
    console.log("you can drive");
}
if(age>14 && age<=18){
    console.log("you can drive easily")
}
if(age>=19){
    console.log("you can")
}
*/

const prompt=require("prompt-sync")();
let grade=prompt("enter grade");
let gpa;
switch(grade){
    case 'A':
        gpa=4.0;
        break;
        case 'B':
           gpa=3.6;
            break;
default:
    gpa=0.0;
}
console.log("gpa is"+gpa);

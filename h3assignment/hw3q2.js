const prompt=require('prompt-sync')();
let studentName=prompt("enter student name");
let credits=+prompt("enter number of completed credits");
if(credits>0 && credits<30){
    console.log("freshman");
}
if(credits>=30&&credits<60){
    console.log("sophomore");
}
if(credits>=60&&credits<90){
    console.log("junior")
}
if(credits>90){
    console.log("senior")
}
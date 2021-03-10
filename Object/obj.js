"use strict";
let sam1={name:"sam", age:10};
let sam2={name:"sam",age:10};
let john={name:"john",age:10};
console.log(sam1===sam2);

function isEqual(obj1,obj2){
   if
    (obj1.name===obj2.name && obj1.age===obj2.age){
       return true; 
    }else{
        return false;
    }
   
}
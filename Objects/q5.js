/**
 * Write a function named titleCase with one parameter named s. This function returns a copy 
 * of s but with the first letter of each word capitalized.
 */
"use strict";
// eslint-disable-next-line require-jsdoc
function titleCase(str){
   let firstChar = str.charAt(0);
    str = firstChar.toUpperCase() + str.substr(1, str.length);
    for(let i =0; i<str.length-1; i++){
        if(str[i] === " "){
            let char = str[i +1];
            str = str.substr(0,i) +" "+ char.toUpperCase() + str.substr(i+2,str.length -1);
        }
       
    }
    
return str;
}

console.log(titleCase(" Hello how are you"))

//find middle value and check if it is odd or even
/*function getmiddle(arr){
    let index=Math.floor(arr.length/2);
    let middleValue=0;
    if(arr.length%2!==0){
middleValue=arr[index];
}
else{

middleValue=arr[index-1]+arr[index]/2;
middleValue=average;
}

console.log(middleValue);
return middleValue%2==0;

} */


/**
 * 
 * @param {String} text Text for counting 
 * @returns {Number}; Number of digits in text
 */
"use strict";
// eslint-disable-next-line require-jsdoc
function countDigit(text){
    
    if(text.length ===1){
        return 1;
    } else {
        let newText = text.substr(1);
        return 1+ countDigit(newText);
    }
}

console.log(countDigit("123"));

//sum first and last value and check if it is prime?
 /*function checkPrime(arr){
let value=arr[0]+arr[arr.length-1];
console.log(value);
if(value===1 || value===2 )return true;
    for(let i=2;i<value;i++)){
if(value%i===0){
    return false;
}

    }
return true;

 }*/


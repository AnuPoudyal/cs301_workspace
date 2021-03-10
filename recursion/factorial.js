"use strict";
/**
 * 
 * @param {number} num  is number
 * 
 * @returns {number} is number
 */
function factorial(num){
if(num==0) return 1;
else{
    return num * factorial(num-1);
}
}


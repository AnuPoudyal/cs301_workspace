"use strict";
/**
 * 
 * @param {array} arr is an array to be tested
 * @return {boolean} true if array is a palindrome array
 */
function isPalindrome(arr){
    let copy=[];
    for(let abc of arr){
        copy.push(abc);
    }
    for(let i=0;i<arr.length;i++){
        if(arr.shift()!==copy.pop()){
            return false;
        }
    }
return true;

}
console.log(isPalindrome([1,2,2,5,2,1]))
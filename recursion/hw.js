"use strict";
/**
 * Write recursive functions to 
 * calculate the power of any base 
 *  count the digits of a given number
• reverse a given string.
 */
/**
 * 
 * @param {Number} num  Base integer
 * @param {Number} pow;
 * @returns {Number};
 */
function power(num, pow){
    if(pow === 0 ){
        return 1;
    } else {
        return num * power(num, pow-1);
    }
}
console.log(power(2,2));



/**
 * 
 * @param {Number} num  Numbers for counting digits
 * @returns {Number} Total digits;
 */
function countDigits(num){
    if(num === 0){
        return 0;
    } else {
        return 1 + countDigits(Math.floor(num /10 ));
    }

}
console.log(countDigits(123));

/**
 * 
 * 
 * @param {String} string  Text for reversing
 * @returns {String} Reverse text
 */
function reverse(string){
    
    if(string === ""){
        return "";
    } else {
       return reverse(string.substr(1)) + string.charAt(0);
    }
    
}
console.log(reverse("anu"));
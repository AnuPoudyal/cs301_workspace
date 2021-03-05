/* eslint-disable valid-jsdoc */
"use strict";
/**
 * 
 * @param {number} n number to be tested if prime
 * @return {boolean} 
 */
function checkPrime(number){
    for(let i=2; i<number;i++){
        if(number%i===0) return false;
    }
    return true;
}

/**
 * 
 * @param {number} n number to be test if odd
 * @return {boolean} 
 */
function isOdd(number){
    return number%2!==0;
}

module.exports = {checkPrime, isOdd};
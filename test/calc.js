"use strict";

/**
 * 
 * @param {number} op1  is first operand
 * @param {number} op2 is second operand
 * @return {number} sum  
 */
function add(op1, op2) {
    
return op1 + op2;
}

/**
 * 
 * @param {number} op1  is first operand
 * @param {number} op2 is second operand
 * @return {number} substraction
 */
function sub(op1, op2) {
return op1-op2;
}

/**
 * 
 * @param {number} op1  is first operand
 * @param {number} op2 is second operand
 * @return {number} quotient
 */
function div(op1, op2) {
    if(op2===0) return NaN;
    return op1/op2;
}

module.exports = {add, sub, div};
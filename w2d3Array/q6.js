//6. Modify rotate functions to rotate array right by n times where, n is the second parameter
//passed in the function.
 
"use strict";
/**
 * 
 * @param {Object} arr array whose elements should be rotated
 * @param {number} ntimes number of time elements should be rotated
 * @returns {Object} right rotated array
 */
function rotateTimes(arr, ntimes){
    let count = 1;
    while(count <= ntimes){
    let element = arr.shift();
    arr.push(element);
    count++;
    }
    return arr;
}

console.log(rotateTimes([1,2,3,4,5], 4));
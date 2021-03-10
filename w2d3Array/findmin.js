//Write a function findMin that takes an array as a parameter and returns the minimum value.
//Now use this function to find minimum value in the array [2,3, -1,-4,3,2,1]

"use strict";

/**
 * 
 * @param {array} arr is an array
 * @returns {array} is an array
 */
function findMin(arr){
let min=arr[0];
for(let i=0;i<arr.length;i++){
if(arr[i]<min){
    min=arr[i];
}

return min;
}


}

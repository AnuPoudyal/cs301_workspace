"use strict";
/**
 * 
 * @param {array} arr1  is array
 * @param {array} arr2 is array
 * @returns {array} is array
 */
function EqualArray(arr1, arr2) {
    if (arr1 === arr2) return true;
   
    if (arr1.length !== arr2.length) return false;
  
     for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  console.log(EqualArray([1,2,3],[1,3]))





  //sum of multidimensional array of all elements
  let matrix=[[1,2,3],[3,4,5],[4,3,2]];
let sum=0;
for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix[i].length;j++){
        console.log(matrix[i][j]);
    }
}
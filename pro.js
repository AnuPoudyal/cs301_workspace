
"use strict";
/**
 * 
 * @param {array} arr is array
 * 
 * @returns{array} arr is array
 */
function sortAscending(arr){
let array=[0,2,1,3,5,6,6,5];
let temp=0;
for(let i=0;i<arr.length;i++){

    for(let j=0;j<arr.length;j++){
        if(arr[i]>arr[j]){
temp=arr[i];
arr[i]=arr[j];
arr[j]=temp;
        
        }
    }
}
console.log(sortAscending([0,2,1,3,4,6,]))

}

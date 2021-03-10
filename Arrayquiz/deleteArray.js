//Write a function deleteArrayElement that takes two parameters, first an array and second
//parameter is an array index to delete element from. You should do this without using any
//inbuilt functions
"use strict";
/**
 * 
 * @param {array} arr is array 
 * @param {array} arr is array
 * @returns{array} arr is array
 */
function deleteArrayElement(arr,idx){
    let index=0;
    let newArray=[];
    for(let i=0;i<arr.length;i++){
    if(i==idx) continue;
    newArray[index]=arr[i];
    index++;
    return newArray;
    }

}



   /* const array = [2, 5, 9];

    console.log(array);
    
    const index = array.indexOf(5);
    if (index > -1) {
      array.splice(index, 1);
    }
    
    // array = [2, 9]
    console.log(array);

*/
array.indexOf(5);
array.splice(index,1);


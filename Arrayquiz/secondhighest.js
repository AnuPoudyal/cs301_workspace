"use strict";
/**
 * 
 * @param {array} arr is an array
 * @return {array} arr is an array
 * 
 */
function SecondHighest(arr){
    let max1 = arr[0];         
    let  max2 = arr[1];
    for (let i = 2; i < arr.length; i++){      
        if (arr[i] > max2)
        {
            max2 = arr[i];
        }

        if (max2 > max1)
        {
            let temp = max1;
            max1 = max2;
            max2 = temp;
        }
    }
     return max2;
}

console.log(SecondHighest([1,2,3,4]))
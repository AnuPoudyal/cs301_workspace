//An evenDominated array is an array that has count of even elements in the array more than the
//odd elements. Write a function that tests if an array is even dominated.
"use strict";
function CountEvenOdd(){
{
    let even_count = 0;
    let odd_count = 0;
 
    
    for (let i = 0; i < arr.length; i++) {
         
        
        if (arr[i]%2!==0)
            odd_count++;
        else
            even_count++;
    }
    if(even_count>odd_count){
        return true;
    }
    else{
        return false;
    }
 
   
}
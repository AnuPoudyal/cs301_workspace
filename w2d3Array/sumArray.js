//Write a function sumArrays, that takes two arrays as parameters (you can assume of same
   // length) then returns a new array by adding two array values at the corresponding indices.

   function sumArrays(arr1,arr2){
let result=[];
for(let i=0;i<arr1.length;i++){

result.push([]);

}
for(let j=0;j<arr1.length;j++){

    result[i].push(arr1[i][j] + arr2[i][j]);
}

   }
   return result;
}
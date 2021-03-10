function Duplicate(arr){
    let count =0;
    
    for(let i = 0; i<arr.length-2; i++){
        for(let j= i+1; j<arr.length ; j++){
            if(arr[i]=== arr[j]){
                count +=1;
            }
        
        }
    }
    return count;
}

console.log(Duplicate([2,3,4,2,3,5,4,6,7,8,8,8,6,-1,0,-1]));

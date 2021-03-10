
 // Do matrix addition and print result on matrix format for following:
 

let matrix1 = [[0,1,2], [9,8,7]];
let matrix2 = [[6,5,4], [3,4,5]];

function addMatrics(arr1, arr2){
    let reslt = [];
    for(let i = 0; i < arr1.length; i++){
        let row = [];
        for (let j = 0; j < arr1[i].length; j++ ){
            row.push(arr1[i][j] + arr2[i][j]);
        }
        reslt.push(row);
    }
    return reslt;
}

console.log(addMatrics(matrix1, matrix2));

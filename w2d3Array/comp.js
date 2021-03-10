arr1=[1,3,2,4,5,7,10,22,23];
arr1.sort(myComparator);
console.log(arr1);
let mycomparator=function (a,b){
    return a-b;
}

// let mycomparator
//Find middle value and check if it is odd or even?

const { resourceLimits } = require("worker_threads");




//sum first and last value of array and check if it is prime ?
 
//print array that are in even indices.

//Even dominant array is an array that has sum of all even number bigger than the sum of all odd numbers.
//Write a function that tests if an array is even dominated?

function longestword(str){
const words=str.split("");
let longestwords=word[0];
for(let i=0;i<arr.length;i++){
if(words[i].length>longestwords.length){
    longestwords=words[i];
    return words[i];
}
}

function isOneTwoOne(arr){
if(arr[0]==1 && arr[arr.length-1]){
for(let i=0;i<arr.length-2;i++){
if(arr[i]===2){
    continue;
}else{
    return false;
}return true;
}
}

//function testfirstlast(arr){
let sum=arr[0]+arr[arr.length-1];
let average;
if(arr.length%2==0){
let middle=(arr.length-1)/2;
average=arr[Math.floor(middle)+arr[Math.ceil(middle)/2]];
else{
average=arr[middle];
}
return sum===average;
console.log(testFirstLast([1,2,3,4,5]))
}

let result=[];
for(let i=0;i<arr.length;i++){
if(arr[i]%2==0 && arr[i-1]%2==0){
    result.push('-',str[i])
}else{

    return str[i];
}
// function isDivisible(arr,div){
    for(let i=0;i<arr.length;i++){
if(arr[i]%div==0){
    continue
}else{
    return false;
}return true;
}

// let myArray=[1,2,3];
console.log(myArray.join("-"));

let arr=["i","study","js"];
arr.splice(1,1);
console.log(arr); //[i ,js]//from index 1 remove  1 element

let arr=["i","study","js","now"];
arr.splice(0,3,"lets","dance"); //[lets dance now]

//slice doesnot modify original array


function getLast(arr){
let copy=arr.splice();
return copy.pop();
}
 let myOriginalArray=[1,2,3];
 console.log(getLast(myOriginalArray));
 console.log(myoriginalArray);
}

//function findMIn(arr){
let min=arr[0];
for(let i=1;i<arr.length;i++){
if(arr[i]<min){
    min=arr[i];
}
return min;
}
//function sumIndices(arr){
let sum=0;
for(let i=0;i<arr.length;i++){

    if(i%2==0){
        sum+=arr[i];
    }
}return sum;    
}

//funtion sumArrays(arr1,arr2){
let result=[];
for(let i=0;i<arr.length;i++){
    result[i]=arr1[i]+arr2[i];
}
result result;
}

//function isArrayEqual(arr1,arr2){
for(let i=0;i<arr1.length;i++){
if(arr1[i]!==arr2[i]){
    return false;
}
return true;

}

//let fruits=["apple","orange","pear"];
console.log(fruits.shift()); //remove apple
console.log(fruits); // orange,pear
console.log(fruits.unshift());
console.log(fruits);

//let arr1=[1,2,3];
arr1.push(4);
console.log(arr1);//1234
console.log(arr1.length);4
arr1.pop();4
console.log(arr1.length);//3





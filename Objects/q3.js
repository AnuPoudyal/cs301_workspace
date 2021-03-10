
// a function checkSpam(str) that returns true if str contains text "lottery" or "prize",
//otherwise return false.
"use strict";
/**
 * 
 * @param {String} str is a  string
 * @returns{Boolean} true if it finds
 */
function checkSpam(str){
for(let i=0;i<str.length;i++){
if(str.includes("lottery") || str.includes("prize")){
    return true;
}
return false;
}
}
console.log(checkSpam("lottery"))
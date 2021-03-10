/**
 * write the function which returns number of properties of an object.
 */
function numOfProperties(obj){
    let count = 0;
    for(let prop in obj){
        count++;
    }
    return count;
}

let user = { Firstname :"john", lastName:"smith"};
 console.log(numOfProperties(user));
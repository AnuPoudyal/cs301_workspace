//Write a function compute, that takes three parameters. First parameter is a call back function
//that does the actual operation, second and third are the operands

function display(result){
    console.log("result");
}

function compute(mycallback,a,b){
 let sum=a+b;
    mycallback(sum);
}
compute(display,5,5);


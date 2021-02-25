/*var foo = '0';
switch (foo) {
 case -1:
 console.log('negative 1');
 break;
 case 0:
 console.log(0);
 case 1:
 console.log(1);
 break;
 case 2:
 console.log(2);
 break;
 default:
 console.log('default');
}*/

//output will be default if we use '0' instead of 0 in var foo='0'

const prompt=require('prompt-sync')();
let cost=+prompt("enter the cost");
if(cost>=0 && cost<50000){
    console.log(0.05*cost);
}
if(cost>=50000 && cost<100000){
    console.log(1000+0.10*(cost-50000));
}
if(cost>=100000 && cost<200000){
    console.log(2000+0.15*(cost-100000));
}
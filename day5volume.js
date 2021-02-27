const prompt=require("prompt-sync")();
let r=prompt("enter radius");
let A;
function area(r){
    A=Math.PI*Math.pow(r,2);
    return A;
}
console.log(area(r));

let H=prompt("enter height of cylinder");
let v;
function cylinderVolume(H){
    v=area(r)*H;
    return v;

}
console.log(cylinderVolume(H));






